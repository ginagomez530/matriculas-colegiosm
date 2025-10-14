import Papa from "papaparse";
export function jsonToEdupageCSV(items: any[], fieldMap: Record<string,string>): string {
  const rows = items.map((it) => {
    const row: Record<string, string> = {};
    for (const [jsonKey, csvHeader] of Object.entries(fieldMap)) {
      row[csvHeader] = getByPath(it, jsonKey) ?? "";
    }
    return row;
  });
  return Papa.unparse({ fields: Object.values(fieldMap), data: rows });
}
export function edupageCSVToJson(csv: string, fieldMap: Record<string,string>): any[] {
  const parsed = Papa.parse(csv, { header: true });
  const out: any[] = [];
  for (const row of parsed.data as any[]) {
    const item: any = {};
    for (const [jsonKey, csvHeader] of Object.entries(fieldMap)) {
      setByPath(item, jsonKey, row[csvHeader] ?? "");
    }
    out.push(item);
  }
  return out;
}
function getByPath(obj: any, path: string) { return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj); }
function setByPath(obj: any, path: string, val: any) {
  const parts = path.split(".");
  let cur = obj;
  parts.forEach((p, idx) => { if (idx === parts.length - 1) cur[p] = val; else cur = cur[p] = cur[p] || {}; });
}
