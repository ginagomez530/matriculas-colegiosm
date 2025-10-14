import Mustache from "mustache";
import { jsPDF } from "jspdf";
export async function renderMatriculaPDF(data: any) {
  const tpl = await fetch("/templates/pdf_template_matricula.html").then(r => r.text());
  const html = Mustache.render(tpl, data); // futuro: server-side para PDF fiel
  const doc = new jsPDF("p", "pt", "a4");
  doc.setFontSize(12);
  doc.text("Vista previa Hoja de Matrícula (placeholder)", 40, 40);
  doc.text("Para PDF fiel, usar Playwright (server) o html2canvas.", 40, 60);
  doc.save(`matricula_${data?.student?.documento || "estudiante"}.pdf`);
}
