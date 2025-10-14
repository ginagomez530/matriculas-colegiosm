'use client';
import { useEffect, useState } from 'react';

export default function ConsentTextPage() {
  const [html, setHtml] = useState('<p>Cargando...</p>');

  useEffect(() => {
    (async () => {
      const md = await fetch('/consent/consentimiento_colombia.md').then(r => r.text());
      const { marked } = await import('marked');
      // marked puede retornar string o Promise<string> → esperamos siempre
      const rendered = await marked(md);
      setHtml(String(rendered));
    })();
  }, []);

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
