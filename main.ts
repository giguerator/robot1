let direction = 0
let distance = 0
maqueenPlusV2.I2CInit()
basic.forever(function () {
    distance = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    direction = randint(1, 2)
    if (distance < 30 && distance != 0) {
        if (direction == 1) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
            basic.pause(1000)
        }
        if (direction == 2) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
            basic.pause(1000)
        }
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    }
})
