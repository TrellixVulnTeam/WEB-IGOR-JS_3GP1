function mostrarOla() {
  var inputNome = document.getElementById('nome')
  var nome = inputNome.value
  document.getElementById('resposta').textContent = 'Olá: ' + nome
}
var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', mostrarOla)

//var x = (10 / 2) * Math.sqrt(9) - 4
//alert(x)
