import React from 'react';
import ReactDOM from 'react-dom/client';

// Vamos tentar renderizar algo sem importar NENHUM componente complexo
const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = '<h1>ERRO CRÍTICO: A div com id "root" não existe no index.html</h1>';
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <div style={{ padding: 50, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: 'green' }}>SUCESSO! O React está vivo.</h1>
      <p>O problema não é a configuração, é algum componente interno.</p>
    </div>
  );
}
