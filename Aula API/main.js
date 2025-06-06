function buscarcachorro() {
    let url = "https://dog.ceo/api/breeds/image/random"

    fetch(url).then(
        resposta => {
            return resposta.json()
        }
    )
    .then( dados => { 
        let novodog = document.createElement("img")
        novodog.src = dados.message
        novodog.width = '300px'
        document.getElementById("dog").appendChild(novodog)

    })
}
buscarcachorro()