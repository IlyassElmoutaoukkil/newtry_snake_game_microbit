let ledNewPosition = []
let score = 5
let move = "toLeft"
let lastMoveX = 'toRight'
let lastMoveY = 'toRight'
let snakePosition = [[0, 0],[1,0],[2,0]]
let s=0
basic.forever(function () {
    s++
    let leds = []
    basic.clearScreen()
    if (move == "toRight") {
        
        let snakeNewX = snakePosition[snakePosition.length - 1][0]+1
        snakePosition.push([snakeNewX, snakePosition[snakePosition.length - 1][1]])
        snakePosition.removeAt(0)
        if (snakePosition[0][0]>5){
            
            let newX = 0 - snakePosition.length
            let reSnake = [[newX, snakePosition[0][1]]]
            for(let i=1;i<snakePosition.length;i++){
                newX++
                reSnake.push([newX, snakePosition[0][1]])
            }

            snakePosition = reSnake
        }
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

    


    
    
    for (let i = 0; i <= snakePosition.length - 1; i++) {
        console.log(snakePosition[i])
        led.plot(snakePosition[i][0], snakePosition[i][1])
    }

    basic.pause(400)
})
