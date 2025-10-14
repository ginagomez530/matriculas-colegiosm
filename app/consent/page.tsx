'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ConsentPage() {
  const [banner, setBanner] = useState('');
  const [acceptRequired, setAcceptRequired] = useState(false);
  const [acceptOptional, setAcceptOptional] = useState(false);

  useEffect(() => { fetch('/consent/consent_banner.txt').then(r=>r.text()).then(setBanner); }, []);

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ color: '#0B5ED7' }}>Antes de continuar</h1>
      <pre style={{ whiteSpace: 'pre-wrap', background:'#f7f9fc', padding:16, border:'1px solid #dde2e6', borderRadius:8 }}>{banner}</pre>
      <div style={{ marginTop: 16 }}>
        <h4>Datos del autorizante (padre/madre/acudiente)</h4>
        <input id="repNombre" placeholder="Nombre completo" style={{ marginRight:8, padding:8, border:'1px solid #dde2e6', borderRadius:6 }} />
        <input id="repDoc" placeholder="Documento" style={{ marginRight:8, padding:8, border:'1px solid #dde2e6', borderRadius:6 }} />
        <input id="repParentesco" placeholder="Parentesco" style={{ padding:8, border:'1px solid #dde2e6', borderRadius:6 }} />
      </div>
      <div style={{ marginTop: 16 }}>
        <label><input type="checkbox" checked={acceptRequired} onChange={e=>setAcceptRequired(e.target.checked)} /> Acepto finalidades necesarias</label><br/>
        <label><input type="checkbox" checked={acceptOptional} onChange={e=>setAcceptOptional(e.target.checked)} /> Acepto finalidades opcionales</label>
      </div>
      <p style={{ marginTop: 8 }}>
        <Link href="/consent/texto">Ver autorización completa</Link>
      </p>
      <button
        style={{ marginTop: 16, background: acceptRequired ? '#0B5ED7' : '#6C757D', color:'#fff', border:'none', padding:'8px 16px', borderRadius:6 }}
        disabled={!acceptRequired}
        onClick={()=>{ window.location.href='/parent'; }}
      >
        Continuar
      </button>
    </main>
  );
}
