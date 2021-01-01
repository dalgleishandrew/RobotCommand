input.onButtonPressed(Button.A, function () {
    radio.sendString("Forward")
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
radio.setGroup(1)
