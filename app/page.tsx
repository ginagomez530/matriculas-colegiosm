'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ color: '#0B5ED7' }}>Portal de Matrículas</h1>
      <ul>
        <li><Link href="/consent">1) Aceptación de datos</Link></li>
        <li><Link href="/parent">2) Portal de Padres</Link></li>
        <li><Link href="/admin">3) Secretaría/Admin</Link></li>
        <li><Link href="/dashboard">4) Dashboard</Link></li>
      </ul>
    </main>
  );
}
