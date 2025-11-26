import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("Tentando iniciar o React..."); // Mensagem no console

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Elemento ROOT encontrado!");
  const root = ReactDOM.createRoot(rootElement);
  
  // Tenta renderizar o App com proteção de erro
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React renderizado com sucesso");
  } catch (error) {
    console.error("ERRO AO RENDERIZAR APP:", error);
    rootElement.innerHTML = '<h1 style="color:red; font-size:30px">ERRO FATAL NO APP. CHEQUE O CONSOLE.</h1>';
  }
} else {
  console.error("FATAL: Não encontrei a div 'root' no HTML.");
  document.body.innerHTML = '<h1 style="color:red; font-size:30px">ERRO FATAL: Faltou a div ROOT no HTML.</h1>';
}
