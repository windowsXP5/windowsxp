input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
