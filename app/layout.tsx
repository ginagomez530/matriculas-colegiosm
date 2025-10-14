export const metadata = { title: "Matrículas Multi-Colegio", description: "Portal de matrículas" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Inter, system-ui, Arial, sans-serif", color: "#333" }}>{children}</body>
    </html>
  );
}
