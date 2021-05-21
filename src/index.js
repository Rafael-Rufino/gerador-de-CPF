//importei o arquivo GeraCPF
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const gerarCpf = document.querySelector('.gerar-cpf');



// função alto executavel
(function(){
  gerarCpf.addEventListener('click', () =>{ 
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');// class do index
  cpfGerado.innerHTML = gera.geraNovoCpf(); // exibir na tela o resultado

});
}());

