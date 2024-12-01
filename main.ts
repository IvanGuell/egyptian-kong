namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const princess = SpriteKind.create()
    export const barril = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroy(rario)
    effects.blizzard.startScreenEffect()
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rario.isHittingTile(CollisionDirection.Bottom)) {
        rario.vy = -150
        if (controller.left.isPressed()) {
            rario.setImage(assets.image`mJumpL`)
        }
        if (controller.right.isPressed()) {
            rario.setImage(assets.image`mJumpR`)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.princess, function (sprite, otherSprite) {
    effects.confetti.startScreenEffect()
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rario.setImage(assets.image`RarioL`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stair1`, function (sprite, location) {
    if (controller.up.isPressed()) {
        rario.setVelocity(0, -50)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.stairSouth, function (sprite, location) {
    sprite.setVelocity(-50, 0)
    sprite.ay = 500
})
scene.onOverlapTile(SpriteKind.barril, sprites.dungeon.stairSouth, function (sprite, location) {
    sprite.setVelocity(-50, 0)
    sprite.ay = 500
})
scene.onOverlapTile(SpriteKind.barril, assets.tile`stair2`, function (sprite, location) {
    sprite.setVelocity(50, 0)
    sprite.ay = 500
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rario.setImage(assets.image`Rario`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(rario)
    effects.blizzard.startScreenEffect()
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stair2`, function (sprite, location) {
    if (controller.up.isPressed()) {
        rario.setVelocity(0, -50)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    rario.setImage(assets.image`Rario`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.barril, function (sprite, otherSprite) {
    sprites.destroy(rario)
    effects.blizzard.startScreenEffect()
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`stair2`, function (sprite, location) {
    sprite.setVelocity(50, 0)
    sprite.ay = 500
})
let barrilP: Sprite = null
let barrilR: Sprite = null
let rario: Sprite = null
rario = sprites.create(assets.image`Rario`, SpriteKind.Player)
rario.setPosition(6, 615)
controller.moveSprite(rario, 80, 0)
rario.ay = 500
scene.setBackgroundImage(assets.image`hm`)
tiles.setCurrentTilemap(tilemap`Pyramid`)
scene.setBackgroundColor(15)
scene.cameraFollowSprite(rario)
let kong = sprites.create(assets.image`dkMummy`, SpriteKind.boss)
kong.setPosition(365, 100)
let nefer = sprites.create(assets.image`Nefertiti`, SpriteKind.princess)
nefer.setPosition(300, 70)
game.showLongText("Bienvenido a Donkey Kong! (Sí...Esto es un Donkey Kong...)", DialogLayout.Bottom)
game.showLongText("Este fue el primer juego de Donkey Kong, salido en el año 1981, también fue la primera aparición de el fontanero más conocido del planeta.", DialogLayout.Bottom)
game.showLongText("Este juego intenta recrear la experiencia exacta de ese clasico, esperamos qe lo disfrutes.", DialogLayout.Bottom)
forever(function () {
    for (let index = 0; index < 999999; index++) {
        pause(3000)
        barrilR = sprites.create(assets.image`barril1`, SpriteKind.barril)
        tiles.placeOnRandomTile(barrilR, sprites.dungeon.chestClosed)
        barrilR.setVelocity(-50, 0)
        barrilR.ay = 500
    }
})
forever(function () {
    for (let index = 0; index < 999999; index++) {
        pause(3000)
        barrilP = sprites.create(assets.image`barrilP`, SpriteKind.Projectile)
        tiles.placeOnRandomTile(barrilP, sprites.dungeon.chestOpen)
        barrilP.setVelocity(50, 0)
        barrilP.ay = 500
    }
})
