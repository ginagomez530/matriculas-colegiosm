export async function loadSchoolConfig(schoolId: string) {
  const path = `/config/school_config_${schoolId}.json`;
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error("No se encontró la configuración del colegio: " + schoolId);
  return res.json();
}
export async function loadSchema() {
  const res = await fetch("/config/schema_matriculas.json", { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo cargar el schema");
  return res.json();
}
