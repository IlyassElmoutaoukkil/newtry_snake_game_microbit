let ledNewPosition = []
let score = 5
let move = "toTop"
let lastMoveX = 'toLeft'
let lastMoveY = 'toRight'
let snakePosition = [[1, 4],[2,4],[3,4]]
let s=0
basic.forever(function () {
    s++
    let leds = []
    basic.clearScreen()
    if (move == "toRight") {
        
        let snakeNewX = snakePosition[snakePosition.length - 1][0]+1
        snakePosition.push([snakeNewX, snakePosition[snakePosition.length - 1][1]])
        snakePosition.removeAt(0)
        
    }

    if (move == "toLeft") {
        let snakeNewX = snakePosition[0][0] - 1
        snakePosition.unshift([snakeNewX, snakePosition[snakePosition.length - 1][1]])
        snakePosition.removeAt(snakePosition.length - 1)

        if (snakePosition[snakePosition.length-1][0] < 0) {

            let newX = 5 + snakePosition.length
            let reSnake = [[newX, snakePosition[0][1]]]
            for (let i = 1; i < snakePosition.length; i++) {
                newX--
                reSnake.push([newX, snakePosition[0][1]])
            }

            snakePosition = reSnake
        }
    }


    if (move == "toBottom") {
        if(lastMoveX=='toRight'){
            let snakeNewY = snakePosition[snakePosition.length - 1][1] + 1
            snakePosition.push([snakePosition[snakePosition.length - 1][0], snakeNewY])
            snakePosition.removeAt(0)
        }

        if (lastMoveX == 'toLeft') {
            let snakeNewY = snakePosition[0][1] + 1
            snakePosition.unshift([snakePosition[0][0], snakeNewY])
            snakePosition.removeAt(snakePosition.length-1)
            
        }

        if (snakePosition[0][1] > 5) {

            let newY = 0 - snakePosition.length
            let reSnake = [[snakePosition[0][0],newY]]
            for (let i = 1; i < snakePosition.length; i++) {
                newY++
                reSnake.push([snakePosition[0][0], newY])
            }
            snakePosition = reSnake
        }
    }

    if (move == "toTop") {
        if (lastMoveX == 'toRight') {
            let snakeNewY = snakePosition[snakePosition.length - 1][1] - 1
            snakePosition.push([snakePosition[snakePosition.length - 1][0], snakeNewY])
            snakePosition.removeAt(0)
        }

        if (lastMoveX == 'toLeft') {
            let snakeNewY = snakePosition[0][1] - 1
            snakePosition.unshift([snakePosition[0][0], snakeNewY])
            snakePosition.removeAt(snakePosition.length - 1)

        }

        if (snakePosition[snakePosition.length-1][1] < 0) {

            let newY = 5 + snakePosition.length
            let reSnake = [[snakePosition[0][0], newY]]
            for (let i = 1; i < snakePosition.length; i++) {
                newY--
                reSnake.push([snakePosition[0][0], newY])
            }
            snakePosition = reSnake
        }
    }

    for (let i = 0; i <= snakePosition.length - 1; i++) {
        // console.log(snakePosition[i][1])
        led.plot(snakePosition[i][0], snakePosition[i][1])
    }

    basic.pause(400)
})
