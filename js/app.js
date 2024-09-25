let total = 0

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('-')[1].split('R$')[1];
    let quantidadeDoProduto = document.getElementById('quantidade').value;
    let subtotal = valorDoProduto * quantidadeDoProduto
    let listaDeProdutos = document.getElementById('lista-produtos');
    if (quantidadeDoProduto > 0){
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeProduto} <span class="texto-azul"> R$${subtotal} </span>
        </section>`;
        total = total + subtotal;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${total}`;
    } else {
        alert('digite uma quantidade válida!');
    }
  }

  function limpar() {
    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = '';
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = '0';
}