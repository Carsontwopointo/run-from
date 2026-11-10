controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar += 10
})
scene.setBackgroundImage(assets.image`backround`)
let mySprite2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 2 2 f f 2 2 f f f f f 
    f f f f f 2 2 f f 2 2 f f f f f 
    f f f f f 2 2 f f 2 2 f f f f f 
    f f f f f 2 2 f f 2 2 f f f f f 
    f f f f f 2 2 f f 2 2 f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
    f f f 2 2 2 2 2 2 2 2 2 2 f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite2.setPosition(152, 112)
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 4 4 f f 4 4 f f f f f 
    f f f f f 4 4 f f 4 4 f f f f f 
    f f f f f 4 4 f f 4 4 f f f f f 
    f f f f f 4 4 f f 4 4 f f f f f 
    f f f f f 4 4 f f 4 4 f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
    f f f 4 4 4 4 4 4 4 4 4 4 f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
mySprite.setPosition(0, 0)
let statusbar = 100
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
forever(function () {
    mySprite.follow(mySprite2, 50)
})
