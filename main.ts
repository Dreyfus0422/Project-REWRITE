input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.stringPlayable("C5 B A G C5 B A G ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Butterfly)
})
basic.showIcon(IconNames.Scissors)
datalogger.log(
datalogger.createCV("A", 1),
datalogger.createCV("B", 2),
datalogger.createCV("C", 3)
)
basic.forever(function () {
	
})
