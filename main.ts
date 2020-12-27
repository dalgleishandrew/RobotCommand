input.onButtonPressed(Button.A, function () {
    radio.sendString("Forward")
    radio.sendNumber(Math.map(SpeedInput, 0, 1023, 0, 180))
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Spin")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Back")
    radio.sendNumber(Math.map(SpeedInput, 0, 1023, 0, 180))
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Stop")
    basic.clearScreen()
})
let SpeedInput = 0
radio.setGroup(1)
basic.forever(function () {
    SpeedInput = pins.analogReadPin(AnalogPin.P0)
})
