document.getElementById("light").display = "none"

let tabela = livros.getElementsByTagName("tbody")[0]

document.getElementById("formCadastro").addEventListener("submit",
  function(event) {
    event.preventDefault()

    let novaLinha = tabela.insertRow()
    novaLinha.insertCell(0).textContent = titulo.value
    novaLinha.insertCell(1).textContent = autor.value
    novaLinha.insertCell(2).textContent = ano.value
    novaLinha.insertCell(3).textContent = genero.value
    novaLinha.insertCell(4).textContent = preco.value
    limpaformulario()
  }
)

function limpaformulario(){
  titulo.value = ""
  autor.value = ""
  ano.value = ""
  genero.value = ""
  preco.value = ""

}

function addDarkTheme() {
  document.body.classList.add("darkTheme")
  livros.classList.add("darkTheme")
  document.getElementById("dark").style.display = "none"
  document.getElementById("light").style.display = ""
}

function removeDarkTheme() {
  document.body.classList.remove("darkTheme")
  livros.classList.remove("darkTheme")
  document.getElementById("dark").style.display = ""
  document.getElementById("light").style.display = "none"
}