import React from 'react';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f9ff', color: '#0369a1', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅ O SITE ESTÁ VIVO!</h1>
      <p style={{ fontSize: '1.5rem' }}>A conexão WordPress -> Vercel -> GitHub funcionou.</p>
      <br />
      <p style={{ maxWidth: '600px', textAlign: 'center' }}>
        <strong>O que está acontecendo:</strong> O sistema está funcionando, mas o código original 
        estava tentando carregar componentes (Navbar, Hero, etc) que podem estar faltando 
        ou com erros na pasta do GitHub.
      </p>
    </div>
  );
}

export default App;
