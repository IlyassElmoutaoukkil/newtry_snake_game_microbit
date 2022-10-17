let ledNewPosition = []
let score = 0
let move = "toRight"
let lastMoveX = 'toLeft'
let lastMoveY = 'toRight'
let snakePosition = [[1, 0]]
let s=0
let food = [4,4]
radio.setGroup(1)
basic.forever(function () {
    
    if (pins.analogReadPin(AnalogPin.P0) > 1000) {
        // to toBottom
        move = 'toBottom'
    }

    if (pins.analogReadPin(AnalogPin.P0) < 10) {
        // to toBottom
        move = 'toTop'
    }

    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        // to toRight
        move = 'toRight'
    }

    if (pins.analogReadPin(AnalogPin.P1) > 1000) {
        // to toRight
        move = 'toLeft'
    }

    s++
    let leds = []
    basic.clearScreen()
    led.plot(food[0], food[1])
    if (move == "toRight") {

            let snakeNewX = snakePosition[snakePosition.length - 1][0]+1
            snakePosition.push([snakeNewX, snakePosition[snakePosition.length - 1][1]])
            snakePosition.removeAt(0)
            lastMoveX = 'toRight'    
        
        


        if (snakePosition[0][0] > 4) {

            let newX = 0 - snakePosition.length
            let reSnake = [[newX, snakePosition[0][1]]]
            for (let i = 1; i < snakePosition.length; i++) {
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

        if (snakePosition[snakePosition.length-1][0] < 1) {

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

        if (snakePosition[0][1] > 4) {

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

        
    }

    for (let i = 0; i <= snakePosition.length - 1; i++) {
        // console.log(snakePosition[i][1])
        if (snakePosition[i][0]==food[0] && snakePosition[i][1]==food[1]){
            score =+ 1
            radio.sendNumber(score)
            GenerateFood()
            led.plot(food[0], food[1])
        }
        led.plot(snakePosition[i][0], snakePosition[i][1])
    }


    basic.pause(200)
})

function GenerateFood(){
    food = [Math.floor(Math.random() * (4 - 0 + 1)) + 0,Math.floor(Math.random() * (4 - 0 + 1)) + 0]
}