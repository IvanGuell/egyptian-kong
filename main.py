@namespace
class SpriteKind:
    boss = SpriteKind.create()
    princess = SpriteKind.create()
    barril = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(rario)
    effects.blizzard.start_screen_effect()
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.boss, on_on_overlap)

def on_up_pressed():
    if rario.is_hitting_tile(CollisionDirection.BOTTOM):
        rario.vy = -150
        if controller.left.is_pressed():
            rario.set_image(assets.image("""
                mJumpL
            """))
        if controller.right.is_pressed():
            rario.set_image(assets.image("""
                mJumpR
            """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    effects.confetti.start_screen_effect()
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.princess, on_on_overlap2)

def on_left_pressed():
    rario.set_image(assets.image("""
        RarioL
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile(sprite3, location):
    if controller.up.is_pressed():
        rario.set_velocity(0, -50)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        stair1
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite4, location2):
    sprite4.set_velocity(-50, 0)
    sprite4.ay = 500
scene.on_overlap_tile(SpriteKind.projectile,
    sprites.dungeon.stair_south,
    on_overlap_tile2)

def on_overlap_tile3(sprite5, location3):
    sprite5.set_velocity(-50, 0)
    sprite5.ay = 500
scene.on_overlap_tile(SpriteKind.barril,
    sprites.dungeon.stair_south,
    on_overlap_tile3)

def on_overlap_tile4(sprite6, location4):
    sprite6.set_velocity(50, 0)
    sprite6.ay = 500
scene.on_overlap_tile(SpriteKind.barril,
    assets.tile("""
        stair2
    """),
    on_overlap_tile4)

def on_right_pressed():
    rario.set_image(assets.image("""
        Rario
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap3(sprite7, otherSprite3):
    sprites.destroy(rario)
    effects.blizzard.start_screen_effect()
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap3)

def on_overlap_tile5(sprite8, location5):
    if controller.up.is_pressed():
        rario.set_velocity(0, -50)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        stair2
    """),
    on_overlap_tile5)

def on_down_pressed():
    rario.set_image(assets.image("""
        Rario
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap4(sprite9, otherSprite4):
    sprites.destroy(rario)
    effects.blizzard.start_screen_effect()
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.barril, on_on_overlap4)

def on_overlap_tile6(sprite10, location6):
    sprite10.set_velocity(50, 0)
    sprite10.ay = 500
scene.on_overlap_tile(SpriteKind.projectile,
    assets.tile("""
        stair2
    """),
    on_overlap_tile6)

barrilR: Sprite = None
barrilP: Sprite = None
rario: Sprite = None
rario = sprites.create(assets.image("""
    Rario
"""), SpriteKind.player)
rario.set_position(6, 615)
controller.move_sprite(rario, 80, 0)
rario.ay = 500
scene.set_background_image(assets.image("""
    hm
"""))
tiles.set_current_tilemap(tilemap("""
    Pyramid
"""))
scene.set_background_color(15)
scene.camera_follow_sprite(rario)
kong = sprites.create(assets.image("""
    dkMummy
"""), SpriteKind.boss)
kong.set_position(365, 100)
nefer = sprites.create(assets.image("""
    Nefertiti
"""), SpriteKind.princess)
nefer.set_position(300, 70)
game.show_long_text("Bienvenido a Donkey Kong! (Sí...Esto es un Donkey Kong...)",
    DialogLayout.BOTTOM)
game.show_long_text("Este fue el primer juego de Donkey Kong, salido en el año 1981, también fue la primera aparición de el fontanero más conocido del planeta.",
    DialogLayout.BOTTOM)
game.show_long_text("Este juego intenta recrear la experiencia exacta de ese clasico, esperamos qe lo disfrutes.",
    DialogLayout.BOTTOM)

def on_forever():
    global barrilP
    for index in range(999999):
        pause(3000)
        barrilP = sprites.create(assets.image("""
            barrilP
        """), SpriteKind.projectile)
        tiles.place_on_random_tile(barrilP, sprites.dungeon.chest_open)
        barrilP.set_velocity(50, 0)
        barrilP.ay = 500
forever(on_forever)

def on_forever2():
    global barrilR
    for index2 in range(999999):
        pause(3000)
        barrilR = sprites.create(assets.image("""
            barril1
        """), SpriteKind.barril)
        tiles.place_on_random_tile(barrilR, sprites.dungeon.chest_closed)
        barrilR.set_velocity(-50, 0)
        barrilR.ay = 500
forever(on_forever2)
