let ledNewPosition = []
let score = 1
let move = "toRight"
let snakePosition = [0, 0]
basic.forever(function () {
    let leds = []
    basic.clearScreen()
    if (move == "toRight") {
        let s = 0
        while (s < score) {
            s += 1
            let snakeX = snakePosition[0]
            if (snakePosition[0] < 6){
                snakeX = snakePosition[0]++
            }else{
                snakePosition[0]=0
                snakeX = 0
            }
            ledNewPosition = [snakeX, snakePosition[1]]
            leds.push(ledNewPosition)
        }
    }
    
    for (let i = 0; i <= leds.length - 1; i++) {
        console.log(leds[i])
        led.plot(leds[i][0], leds[i][1])
    }
    basic.pause(400)
})
