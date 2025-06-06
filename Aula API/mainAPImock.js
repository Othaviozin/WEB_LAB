function buscarusuario(){
    fetch("https://68422b83e1347494c31c06f8.mockapi.io/")
        .then(resposta => resposta.jason())
        .then(dados => {
            dados.forEach(aluno => {
                let item = document.createElement("li")
                item.textContent
                })

            })
}