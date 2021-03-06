// APÓS TODO COUNTEÚDO CARREGAR A FUNÇÃO VAI COLOCAR TODOS OS QUADRADOS DENTRO DA VARIÁVEL SQUARES
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    // PERCORRENDO SQUARES, PARA CADA CLICK EM UM QUADRADO CHAMAR A FUNÇÃO HANDLECLICK
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    // PASSO QUAL BOX RECEBERÁ O SÍMBOLO ATRAVÉS DO ID
    if (insert_symbol_in_the_square(position)) {
        setTimeout(() => {
            alert('O jogo acabou - O vencedor foi ' + playerTime)
        }, 10)
    }
    updateSquares(position)
}

function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = box[position]

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}