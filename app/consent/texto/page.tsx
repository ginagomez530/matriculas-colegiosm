'use client';
import { useEffect, useState } from 'react';
import { marked } from 'marked';
export default function ConsentTextPage() {
  const [html, setHtml] = useState('<p>Cargando...</p>');
  useEffect(() => { fetch('/consent/consentimiento_colombia.md').then(r=>r.text()).then(md => setHtml(marked(md))); }, []);
  return (<main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}><div dangerouslySetInnerHTML={{ __html: html }} /></main>);
}
