// If Buttons A and B are pressed then it will send the number 2.
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
// On the start up of the micro bit, it sets it to radio group 200.
let Distance = 0
let Pressure = 0
radio.setGroup(200)
basic.forever(function () {
    // This sets the variable pressure to the pin 0
    Pressure = pins.analogReadPin(AnalogPin.P0)
    // This is used for the ultra-sonic sensor and it sets the variable distance to P2, and P1 
    Distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Inches
    )
    // If the pressure is greater than 480 and the distance is less than 10, it will show the number variable distance and send the number 1 over the radio. If it isn't that value then it will show the distance number and send the number 0 over the radio.
    if (Pressure > 480 && Distance < 10) {
        basic.showNumber(Distance)
        radio.sendNumber(1)
    } else {
        basic.showNumber(Distance)
        radio.sendNumber(0)
    }
})
