controller.A.onEvent(ControllerButtonEvent.Released, function () {
    effects.hearts.startScreenEffect(100)
    pins.LED.digitalWrite(false)
    music.baDing.play()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    effects.confetti.startScreenEffect(100)
    pins.LED.digitalWrite(true)
    music.powerDown.play()
})
scene.setBackgroundImage(assets.image`test_screen`)
let mySprite = sprites.create(assets.image`yellowmonkey`, SpriteKind.Player)
let projectile = sprites.create(assets.image`FastBullet`, SpriteKind.Projectile)
mySprite.x = 100
projectile.x = 50
projectile.follow(mySprite, 90)
mySprite.setVelocity(50, 50)
animation.runImageAnimation(
projectile,
assets.animation`bitingbullet`,
100,
true
)
pins.P23.setPull(PinPullMode.PullDown)
pins.P24.setPull(PinPullMode.PullDown)
forever(function () {
    if (mySprite.y >= 128) {
        mySprite.y = 127
        mySprite.setVelocity(mySprite.vx, -55)
    } else if (mySprite.y <= 0) {
        mySprite.y = 1
        mySprite.setVelocity(mySprite.vx, 55)
    } else {
        if (mySprite.x >= 160) {
            mySprite.x = 159
            mySprite.setVelocity(-55, mySprite.vy)
        } else if (mySprite.x <= 0) {
            mySprite.x += 1
            mySprite.setVelocity(55, mySprite.vy)
        } else {
        	
        }
    }
    if (mySprite.overlapsWith(projectile)) {
        mySprite.setVelocity(mySprite.vx * 1.2, mySprite.vy * 1.2)
    }
})
