input.onGesture(Gesture.LogoUp, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
