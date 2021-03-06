// iniciar minhas variáveis
let box = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = false
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function insert_symbol_in_the_square(position) {
    if (gameOver) {
        return
    }
    if (box[position] == '') {
        box[position] = symbols[playerTime]

        gameOver = isWin()

        if (gameOver == false) {
            playerTime == 0 ? playerTime = 1 : playerTime = 0
        }
    }
    return gameOver
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (box[pos1] == box[pos2] &&
            box[pos1] == box[pos3] &&
            box[pos1] != '') {
            return true
        }
    }

    return false
}