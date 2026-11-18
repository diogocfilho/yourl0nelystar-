const btnAbrir = document.getElementById('abrir-login');
const btnFechar = document.getElementById('fechar-login');
const modal = document.getElementById('modal-login');
const formLogin = document.getElementById('form-login');

// Abre a janela ao clicar no botão "Entrar"
btnAbrir.addEventListener('click', () => {
  modal.showModal();
});

// Fecha ao clicar no "X"
btnFechar.addEventListener('click', () => {
  modal.close();
});

// Fecha ao clicar fora da caixa (no fundo escuro)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Captura e-mail e senha quando o usuário envia o formulário
formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  console.log('Tentativa de login:', { email, senha });
  modal.close();
});
