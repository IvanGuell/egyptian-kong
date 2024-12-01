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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite7, otherSprite3) {
    sprites.destroy(rario)
    effects.blizzard.startScreenEffect()
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.princess, function (sprite2, otherSprite2) {
    effects.confetti.startScreenEffect()
    game.gameOver(true)
})
function FadeToWhite (Time: number) {
    color.startFade(color.originalPalette, color.White, Time / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.White, color.originalPalette, Time / 2)
}
scene.onOverlapTile(SpriteKind.barril, sprites.dungeon.stairSouth, function (sprite5, location3) {
    sprite5.setVelocity(-50, 0)
    sprite5.ay = 500
})
scene.onOverlapTile(SpriteKind.barril, assets.tile`stair2`, function (sprite6, location4) {
    sprite6.setVelocity(50, 0)
    sprite6.ay = 500
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        rario.setImage(assets.image`Rario`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.barril, function (sprite9, otherSprite4) {
    sprites.destroy(rario)
    effects.blizzard.startScreenEffect()
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        rario.setImage(assets.image`Rario`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        rario.setImage(assets.image`RarioL`)
    }
})
function SpawnText (text: string, X: number, Y: number) {
    textSprite = textsprite.create(text, 0, 5)
    textSprite.setPosition(X, Y)
    textSprite.setOutline(1, 14)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_title) {
        in_title = false
        inMenu = true
        Menu()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stair2`, function (sprite8, location5) {
    if (controller.up.isPressed()) {
        rario.setVelocity(0, -50)
    }
})
function ShowIntro () {
    scene.setBackgroundImage(img`
        ddddddddbb4444444ddddddddddddddddddbbbbbbeeeeeeeeeeeee3dddddddddddddddddddddddd4444444efffddddddddddddddddddddddddddddddddddd32222222222222222222222222222222222
        ddddddddbb4444444ddddddddddddddddddbbbbbbeeeeeeeeeeeeedddddddddddddddddddddddd444e444efffcddddddddddddddddddddddddddddddddddd32222222222222222222222222222222222
        ddddddddbb4444444ddddddddddddddddddbbbbbbeeeeeeeeeeeeedddddddddddddddddddddddd444e444efffcddddddddddddddddddddddddddddddddddd32222222222222222222222222222222222
        ddddddddbe4444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddddddd44eeeeffffbddddddddddddddddddddddddddddddddddb3222222d1111111111111111111111111e2
        ddddddddbe4444444ddddddddddddddddddbbbbbbeeeeeeeeeeeee4dddddddddddddddddddddddd444effffffddddddddddddddddddddddddddddddddddde322222122222222222222222222222222d4
        bbbbbbbbb44444444ddddddddddddddddddbbbbbbeeeeeeeeeeeee4ddddddddddddddddddddddddd444bcffffdddddddddddddddddddddddddddddbbbbdbee222221211121e222212222222221222b21
        bbbbbbbbb44444444ddddddddddddddddddbbbbbbeeeeeeeeeeeee4ddddddddddddddddddddddddd444bcffffdddddddddddddddddddddddddddddbbbbdbee222221211121e222212222222221222b21
        bbbbbbb4444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee3dddddddddddddddddddd4ddd4444bbcfffdddddddddddddddddddddddddbeeeeeeeeeee2222242122e1121e413b13e112d12d1221
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddd4dd43344bbcfccddddddddddddddddddddddddeeeeeeeeeeeee222221212231121eb1ee13e11211211221
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddd4dd43344bbcfccddddddddddddddddddddddddeeeeeeeeeeeee222221212231121eb1ee13e11211211221
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddd4dddddd44bbbfbbdddddddddddddddddddddddeeeeeeeeeeeeee22222dd222222222222222222222222212
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddddddddd43bbbcddddddddddddd4ddddddddddeeeeeeeeeeeeeee2222222111111111111111111111111d22
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddddddddd43bbbcddddddddddddd4ddddddddddeeeeeeeeeeeeeee2222222111111111111111111111111d22
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddddddddd44bbbcddddddddddddd4ddddddddddeeeeceeeeeeeeee2222222222222222222222222222222222
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddddd444bbbfddddddddddddd4ddddddddddeedddceeeeeeeee2222222222222222222222222222222222
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddddd443bbbeddddddddddddd4ddddddddddeedddbeeeeeeeee2222222222222222222222222222222222
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddddd443bbbeddddddddddddd4ddddddddddeedddbeeeeeeeee2222222222222222222222222222222222
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddddd433dbbbddddddddddddd44dddddddddbedddbeeeeeeeee2222222222222222222222222222222222
        b4444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddd4dd44dbbddddddddddddddd4ddddddddddddddbeeeeeeeee2222222222222222222222222222222222
        b4444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee4ddddddddddddddddddddddd4dd44dbbddddddddddddddd4ddddddddddddddbeeeeeeeee2222222222222222222222222222222222
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee44ddddddddddddd43dddddddddd44dbcddddddddddddd444ddddddddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeccccccbbbbbbbbbbbe
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee44ddddddddddddddddddddddddd44dbfddddddddddddd4444dddddddddddddeeeeeeeeeccceeeeeecceeeeeeccccbbbbbbbbbebbbb
        44444444444444444ddddddddddddddddddbbbbbeeeeeeeeeeeeee44ddddddddddddddddddddddddd44dbfddddddddddddd4444dddddddddddddeeeeeeeeeccceeeeeecceeeeeeccccbbbbbbbbbebbbb
        444444444e4444444dddd4222222eddddddbbbbbeeeeeeeeeeeeee4dddddddddddddddddddddddddd43dbedddddddddddddddd4ddddddddddddbeeeeeeeeddeceeeceeccceeeccccceeeeeeeeeebebec
        444444444e4444444ddd2222222ebedddddbbbbbeeeeeeeeeeeeeeb3dddddddddddddddddddddddddd3dbddddddddddddddddd4bbddddddddddeeeeeeeddddbccccccceeeeecccccceeeeeeeeeeeebbe
        444444444e4444444d4222222ddddbedddbbbbbbeeeeeeeeeeeeeeb3333d333ddddddddddddddddd333dbddddddddddddddddd4bbddddddddddeeeeeddddddbccccccceeeeecfccffceeeeeeeeeeeeee
        444444444e4444444d4222222ddddbedddbbbbbbeeeeeeeeeeeeeeb3333d333ddddddddddddddddd333dbddddddddddddddddd4bbddddddddddeeeeeddddddbccccccceeeeecfccffceeeeeeeeeeeeee
        444444444e444444442222222ddebebeddbbbbbbeeeeeeeeeeeeee43ddddddddddddddddddddddd3343dc4dddddddddddddddd4bbbddddddddbeeeddddd343bccccccdddbbfcfccffcccceeeeceeeeee
        444444444e44444442222222eddebbeedddbbbbeeeeeeeeeeeeeee4333ddddddddddddddddddddd3344bf3ddddddddddddddd43bbdddddbddddebddddd3e43bceffcdbee34bcfcfffcccccceccccecce
        444444444e44444442222222eddebbeedddbbbbeeeeeeeeeeeeeee4333ddddddddddddddddddddd3344bf3ddddddddddddddd43bbdddddbddddebddddd3e43bceffcdbee34bcfcfffcccccceccccecce
        444444444e444444222222222ddebbbf4ddbbbbbeeeeeeeeeeeeee43ddddddddddddddddddddddd3333be3333ddddddddddddddbbdddddbbddddddddd34e33bcccfe34333b3ffeffffccccccccccccce
        444444444e44444222222222eddebeee2e44bbbeeeeeeeeeeeeeee4dddddddddddddddddddddddd334bddddddddddddddddddd4ddddddddbdddddddd34ef33bccccd44443bbfcefffffccccccccccecc
        4444444eee44442222222222eeeee22222efebbeeeeeeeeeeeeeeeb3dddddddddddddddddddddd3333bddddddddddddddddddd4dddddddbbdddddd334efe33ecffc3eeee4ebfccffcfccccccccccccce
        4444444eee44442222222222eeeee22222efebbeeeeeeeeeeeeeeeb3dddddddddddddddddddddd3333bddddddddddddddddddd4dddddddbbdddddd334efe33ecffc3eeee4ebfccffcfccccccccccccce
        eeeeeeeee44444222222222ee2222222effbbbbeeeeeeeeeeeeeeeb3333333333333333333dd333333bedddddddddddddddddd4ddddddddbddd33344ecce33efcff3ee444eefccffcccccccccccccece
        44444444444442222222222e2222222feddbbbbeeeeeeccceeeeeb44443444433333333333dd3333333fddddddddddddddddddddddddddbbdd344edd11ee34ececf4ee334effcfffefccccccccccecee
        44444444444442222222222e2222222feddbbbbeeeeeeccceeeeeb44443444433333333333dd3333333fddddddddddddddddddddddddddbbdd344edd11ee34ececf4ee334effcfffefccccccccccecee
        4444444444442222222222e222222eefeddbbbbeeeeeeeeeeeeeb4ddddddddbbbbb33333333333334bd11dbdddbddddddddddddddddddddbbddece1111b33ecefcfeee33effcefffcfccccccccccecec
        444444444444222222222e222222feeebbdbbbbeeeeeeeeeeeeeb41fffff11ffff1d1111ddd3bd11bfffff1dd1fc11ddd111ddddddddddbbbdbe1e111db34cfcffee44eefffe2fffeeeccccccccceeee
        444444444444222222222e222222feeebbdbbbbeeeeeeeeeeeeeb41fffff11ffff1d1111ddd3bd11bfffff1dd1fc11ddd111ddddddddddbbbdbe1e111db34cfcffee44eefffe2fffeeeccccccccceeee
        44444444444422222222e2222eeeeeeccebbbbbeeeeeeeeeeeee44cc444fffd44f1bffffffff1fffcd555efcc1fcffff1ffffff11ddddddbddebd3ddddb33d33333333bbefe2efffcfccccccccceeeee
        4444444444222222222e2222eeebceeeccbbbbbeeeeeeeeeeeee4dfd2222ffe22fc1fd77777fbfd55555555ffff6666fff77777ff1dd3333dddddd33dddddddddddd3333be22fffceeeeccccccceeeee
        4444444444222222222222eeebbbcceefcbddbeeeeeeeeeeeeee41f22222fb2222f1f7777776fcc555d555555ff6666ff777777ccf1443334d3e3dddddddddddddddddddbe22fffffeeecccccceeeeee
        4444444444222222222222eeebbbcceefcbddbeeeeeeeeeeeeee41f22222fb2222f1f7777776fcc555d555555ff6666ff777777ccf1443334d3e3dddddddddddddddddddbe22fffffeeecccccceeeeee
        44444444442222222eeeeeeeebbbcfeeeddddbbeeeeeeeeeeeee4bf22222242222fcc77f6677fdf555fff5555ff6668f777777777cf144444d4dddddddddddddddddddddbeeeffffceeeecccceceeeee
        4444444444222222efff4ddbebbbcfeeddddbbbeeeeeeeeeeeeebfd22222222222ff177fbb77eff555fff5544ff666fb7776fd7777ef34444ddddddddddddddddddddd33beeffffedbeeeeeceeeeeeee
        4444444444222222efff4ddbebbbcfeeddddbbbeeeeeeeeeeeeebfd22222222222ff177fbb77eff555fff5544ff666fb7776fd7777ef34444ddddddddddddddddddddd33beeffffedbeeeeeceeeeeeee
        444444444422222efeeeedddbbbbbce4ddddbbbeeeeeeeeeeeee1f422224222422ef777fff777ff555ffc5544ff666f177ffff7777fc3344ddddddddddddddddddddd3bbeeefffbddd3eeeeeeeeeeeee
        dddddddd442222ddbeeeeedddddbdbe4dddbeeeeeeeeeeeeeeeedf22222f22f4222f776fff777ff5555555efffc666fd77ffffb777fb3333dddddddddd34eeee33333bbbeeefcedddddeeeeeeeeeeeee
        dddddddd442222ddbeeeeedddddbdbe4dddbeeeeeeeeeeeeeeeedf22222f22f4222f776fff777ff5555555efffc666fd77ffffb777fb3333dddddddddd34eeee33333bbbeeefcedddddeeeeeeeeeeeee
        ddddddddbe44ed3ee4eecedddddccfff44beebeeeeeeeeeeeeeefd2222efbff4222f7777777776f15545554fffc668fd77fffc7777f1444ddddddddd3eccbbbe3333bbeeeefcceddddd3eeeeeeeeeece
        ddddddddbe444deeee4ee4dddddcffffffecfbeeeeeeeeeeeee1f32222fffffe222fc777ccc777fb554c55544ff666ff7777677777f1444dddddddeecbbbbbbbd33bbbeeeefccedddddd4eeeeeeeeeee
        ddddddddbe444deeee4dedddddddeffffffeebeeeeeeeeeeeee1f22222ffffff2222f7ffffc7fcff554f15555ef866ff777777777cf134dddddd3ebbbbbbbd33333bbeeeeefccedddddd3bbeeeeeeeee
        ddddddddbe444deeee4dedddddddeffffffeebeeeeeeeeeeeee1f22222ffffff2222f7ffffc7fcff554f15555ef866ff777777777cf134dddddd3ebbbbbbbd33333bbeeeeefccedddddd3bbeeeeeeeee
        ddddddddbe444d44e433ddddddddbbeeeeeebbbeedddbceeeeefffe222ffffff2eeff7ffffffdfc1ffeffd4fffb88fffffc777cffffd34dddd3433bbbbddd33334bbeeeeeffcceddddd3444eeeeeeeee
        ddddddddbe44444443d43ddddddbbeeeeeeebbbb111dd1dbeeedffffffffffffffffffffffffdd11111fffffffffffffffffffffff144443ddd33433333344444beeeeeeeffceeddddd44444eeeeeeee
        ddddddddbe44444443d43ddddddbbeeeeeeebbbb111dd1dbeeedffffffffffffffffffffffffdd11111fffffffffffffffffffffff144443ddd33433333344444beeeeeeeffceeddddd44444eeeeeeee
        ddddddddbe44444444ee443d4bbbeeeeeeebbbbb1ddd1dd1dbecfffffffffffffffffffffffff11f1cfffffffffffffffffffffff144eedd44eee44444444444beeeeeeecffccebdd3344444eeeeeeee
        ddddddddb4444444eeffee4beeeeeeeeeeceb1d11dd11d1dbdde1ffffffffffffffffffffffff1dfd11ffffffffffffffffffffffd334eeeeee444444444444eeeeeeeccfffceeed4444444eeeeeeeee
        ddddddddb4444444bfffffcceeeeeeeefffcedbdddd1d11bd11111ffffffffffffffffffffffffff1fdffffffffffffffffffff113dd4eeee44444444444eeeeeeeeeeffffcceee444444eeeeeeeeeee
        ddddddddb4444444bfffffcceeeeeeeefffcedbdddd1d11bd11111ffffffffffffffffffffffffff1fdffffffffffffffffffff113dd4eeee44444444444eeeeeeeeeeffffcceee444444eeeeeeeeeee
        ddddddddddddddddddbdbe2eb88cccffffffcdbbb11db1d1ffffff1fffffffffffffffffffffffff1dddffffffeffffffffffffccdfff1ecbfe444444eeeeeeeeeeeffffffecceee444eeeeeeeeeeeee
        ddddddddddddddddddd222222eeaa88ccfffcfddbddbddb1e22224ff4445e442244244f444454454ff4e2424442242442f44e2422e454fdccfceeeeeeeeeeeeeeeefffffffeeceeeeeeeeeeeeeeeeeee
        ddddddddddddddddddd222222eeaa88ccfffcfddbddbddb1e22224ff4445e442244244f444454454ff4e2424442242442f44e2422e454fdccfceeeeeeeeeeeeeeeefffffffeeceeeeeeeeeeeeeeeeeee
        dddddddddddddddddd222222222ebaaacccccffbdddddbb1f2222244222222242224224222222242422224244222422224224424422224f1ffcfffeeeeeeeeeeeffffffffeeeeceeeeeeeeeeeeceeeee
        dddddddddddddddd322222222222ecab4eccccffedddddb1f22422222222242242242422552444422425f4244224222222222424422222e1cfffffffffffffffffffffffeeeeeeecceeeccccccceeeee
        dddddddddddddddd322222222222ecab4eccccffedddddb1f22422222222242242242422552444422425f4244224222222222424422222e1cfffffffffffffffffffffffeeeeeeecceeeccccccceeeee
        ddddddddddddddd4222222222222eaab4eecccffe44bbdb1f224f224225222222224222455244422222ff5222222224422222525524e542cffffffffffffffffffff22ffceeeeeeeecccceeeccceeeee
        dddddddddddddd42222222222222baaacfccccfecccbbcc1f224f425445522222225222244222244222ff42222422255222222244244224ffffffffffffffffffff222ffffeeeeeecccfffffeeceeeee
        ddddddbbbbbbb4222222eee2222ebaa88cccccfbbeeeeeedf425222422552225222424244422442222fff42222242255222222244252424fffffffffffffffffff2222ffffffffffcffffffffffeeeee
        ddddddbbbbbbb4222222eee2222ebaa88cccccfbbeeeeeedf425222422552225222424244422442222fff42222242255222222244252424fffffffffffffffffff2222ffffffffffcffffffffffeeeee
        bdddddbdbbbbb222222efccbbbbaaaa8888ccccceeeeeeebf42222222222252442242422ee2244e222fff42224222222222442255224224fffffffffffffffffff2222ffffffffcffffffffffffeeeee
        dddddddbbbbbe2222eefbaabaaaaaaa88888cccceeeeeeecf522222522222424222422422222222424fffe222222222225242222222222e1fffffffffffffffffe2222ffffffffffffffffffffceeeee
        dddddddbbbbbe2222eefbaabaaaaaaa88888cccceeeeeeecf522222522222424222422422222222424fffe222222222225242222222222e1fffffffffffffffffe2222ffffffffffffffffffffceeeee
        ddddddbcc1111322eefdbaaaaaa88aaaa888ccccbbbbeebbf4444effee54f254f222eee45554422244fff2444ee2f2442e22f4522e544efcfffffffffffffffff22222fffffcfffffffffffffffeeeee
        ddddddddd11111beeee7caaaaaaaaa88888ccccfdbbbbddd1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbffffffffffffffffff22222ffffcffffffffffffffffeeeee
        ddddddddd11111beeee7caaaaaaaaa88888ccccfdbbbbddd1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbffffffffffffffffff22222ffffcffffffffffffffffeeeee
        dddddd111111dddeeebbcaaaa8888888888cccccddddddddd1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1bcccccccccccccccccce22222cccccfffffffffffffffceeeee
        ddddd1111ddddddbcdddcaaaaaaaa88888cccccdddddddddddd1ffffffbbfffffffffffffffffffffffdffffffffffffffffffffff1cecbbbdddbbbbbbbbbbbb222222bbbbfffffffffffffffffeeeee
        bdd11111ddddddbbddddb888888c88888cccccccddddddddddddd111dddb11d111dddddd11111bbd111d111ddddd11dddd1111111dddddddbbbdddddddddddd4222222dddcffffffffffffffffceeeee
        bdd11111ddddddbbddddb888888c88888cccccccddddddddddddd111dddb11d111dddddd11111bbd111d111ddddd11dddd1111111dddddddbbbdddddddddddd4222222dddcffffffffffffffffceeeee
        77d11ddddbddddbbddddd8aaaaa8888cccccccfccddddddddddddddddddddddddddddddddddddebdddddddddddddddddddddddddddddddddddddddddddddddd222222edddcffffffffffffffffeeeeee
        b111ddbbbb111dbbdddddaaaaaa8888ccccfcffccccdddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddbdddddddddddddddd222222edddcffffffffffffffffeeeeee
        b111ddbbbb111dbbdddddaaaaaa8888ccccfcffccccdddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddbdddddddddddddddd222222edddcffffffffffffffffeeeeee
        111dbbbbbb11dbb7dddddaaaaaaa888cfffffffcccccddddddddddddddddddddddddddddddddfbdddddddddddddddddddddddddddddddddddddddddddddddd4444442edddcfffffffffffffffeeeeeee
        d1dbb777b1ddbb77bddddaaaaaa8888cffffffccccccdddddddddddd11ddddddddddddd1ddddcbdddddddddddddddddddddddddddddddddddddddddddddddd4544444edddbceccffffffffffceeeeeee
        d1dbb777b1ddbb77bddddaaaaaa8888cffffffccccccdddddddddddd11ddddddddddddd1ddddcbdddddddddddddddddddddddddddddddddddddddddddddddd4544444edddbceccffffffffffceeeeeee
        11db77e77dbbb77eeddddaaaaaaa888cffffffcccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44444454edddbeeccffffffffffceeeeeee
        ddbb77777e77777eeeddbaaaaaaa88cbbfffffcccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd45445544bdddbecccfffffffffffcbddd3b
        ecc77e77efcc7eee77ddbabaaaaa88cddbfffccccccccddddddddddddddddddddddddddddddeddddddddddddddddddd11ddddddddddddddddddddddddddd345445542bdddbececfffffffbbbdddddddd
        ecc77e77efcc7eee77ddbabaaaaa88cddbfffccccccccddddddddddddddddddddddddddddddeddddddddddddddddddd11ddddddddddddddddddddddddddd345445542bdddbececfffffffbbbdddddddd
        dddddddddddddddddddbaaaaaaa888cdddcccccccccccddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddd3454e54223dddbeccfffffffcddddddddddd
        ddddddddddddddddddccaaaa888888cdddbccccccccccddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddd45444542ddddbccffffffffcddddddddddd
        ddddddddddddddddddccaaaa888888cdddbccccccccccddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddd45444542ddddbccffffffffcddddddddddd
        ddbbdbdddddddddddc88aaa88888ccbdddcccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44444542ddddeccffffffffcddddddddddd
        bbbbbdddddddddddba8aaa88888cccddddcccccccccccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4424444dddddecfffffffcfcddddddddddd
        bbbddddddddddddbcaaaa888cccccbddddcccccccccc8cdddddddbddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddbefffffffffccddddddddddd
        bbbddddddddddddbcaaaa888cccccbddddcccccccccc8cdddddddbddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddbefffffffffccddddddddddd
        bbbbbbbbbbdddddbaaaaa88ccccccdddddccccccccccceeeeddbddddddddddddddddddddddcddddddddddddddddddddddddddddddddddddddddddddddddddd2222ddddddeffffffffffccddddddddddd
        bbbbbbbbbbbbbddaaaabceeecbbbbbbddbcccccccccceeeeccddddddddddddddddddddddddbddddbbddddddddddddddddddddddddddddddddddddddddddddde22dddddddecccffffffcccddddddddddd
        bbbbbbbbbbbbbddaaaabceeecbbbbbbddbcccccccccceeeeccddddddddddddddddddddddddbddddbbddddddddddddddddddddddddddddddddddddddddddddde22dddddddecccffffffcccddddddddddd
        bbbbbbbbbbbbbbbaabeeeeeeeccbbbbbdcccccccccceeeeeccbdbdddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddedddddddddeeeeeccccccbbbddddddddd
        bbbbbbbbbbbbbbdbeeeeeeeeecccbbbbbeccccccccceeeeeccebbbbbddddddddddddbbbbccddbdddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddbeeeeeeecccebddddddddddd
        bbbbbbbbbbbbbbdbeeeeeeeeecccbbbbbeccccccccceeeeeccebbbbbddddddddddddbbbbccddbdddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddbeeeeeeecccebddddddddddd
        bbbbbbbbbbbbbbbeeeebeeeeeeeebbbbbeeeecccceeeeeeeccbbbbbbbbbbbbbbbcccccccccbdddddddddddddddddddddddddbbbcccccccccccbbbbbbbbbbdddbbbbbbbbbeeebeeeecceeebbbbdd3dddd
        bbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbeeeeeecccceeeecccbeccccccccccccccccccccccddddddddddddbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbd33eeeeeebbeeeecceeb44bbd343dd3
        bbbbbbbbbbbbbbbceeeeeeeecccebbbbbbeeeeeeeeeeeeecccccccccccbbbbbbbbbbbbddbbdbbbbbbcccccccccccccccccccbbbbbbbdbdddddbbbbbbbbbbbbbbbd33beeeeebbeeeccceb444bbd444334
        bbbbbbbbbbbbbbbceeeeeeeecccebbbbbbeeeeeeeeeeeeecccccccccccbbbbbbbbbbbbddbbdbbbbbbcccccccccccccccccccbbbbbbbdbdddddbbbbbbbbbbbbbbbd33beeeeebbeeeccceb444bbd444334
        bbbbbbbbbbbbbbbbecceeccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccbbbbbbdbbddddddddddddddddbbbbbbbbbbbbbb3433eeeeeeeeeeccce4444ebb44e344
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbddddddddbbbbbbbbbbbbbddbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbddddddddbbbbbbbbbbbbbddbbbbbbbbbbb
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    game.showLongText("¿Todos conocen a Donkey Kong, verdad?", DialogLayout.Bottom)
    game.showLongText("Ya saben, el gorila que rapta a la princesa Peach y que es vencido por cierto fontanero italiano...", DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.showLongText("¡Pues que sepan que es apropiación cultural!, como todo en estos dias...", DialogLayout.Bottom)
    game.showLongText("A continuación la historia original, donde el mono Egyptian Kong rapta a Nefertiti", DialogLayout.Bottom)
    game.showLongText("Y el albañil Rario será el encargado de rescatarla de la pirámide donde la mantienen cautiva...", DialogLayout.Bottom)
}
function FadeToBlack (Time2: number) {
    color.startFade(color.originalPalette, color.Black, Time2 / 2)
    color.pauseUntilFadeDone()
    color.startFade(color.Black, color.originalPalette, Time2 / 2)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`stair1`, function (sprite3, location) {
    if (controller.up.isPressed()) {
        rario.setVelocity(0, -50)
    }
})
function SetUpGame () {
    rario = sprites.create(assets.image`Rario`, SpriteKind.Player)
    rario.setPosition(6, 615)
    controller.moveSprite(rario, 80, 0)
    rario.ay = 500
    scene.setBackgroundImage(assets.image`hm`)
    tiles.setCurrentTilemap(tilemap`Pyramid`)
    scene.setBackgroundColor(15)
    scene.cameraFollowSprite(rario)
    kong = sprites.create(assets.image`dkMummy`, SpriteKind.boss)
    kong.setPosition(365, 100)
    nefer = sprites.create(assets.image`Nefertiti`, SpriteKind.princess)
    nefer.setPosition(300, 70)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inGame) {
        if (rario.isHittingTile(CollisionDirection.Bottom)) {
            rario.vy = -150
            if (controller.left.isPressed()) {
                rario.setImage(assets.image`mJumpL`)
            }
            if (controller.right.isPressed()) {
                rario.setImage(assets.image`mJumpR`)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.stairSouth, function (sprite4, location2) {
    sprite4.setVelocity(-50, 0)
    sprite4.ay = 500
})
function Menu () {
    sprites.destroy(textSprite)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(15)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Jugar"),
    miniMenu.createMenuItem("Volver al título")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 110)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 45)
    myMenu.y = 60
    myMenu.x = 80
    myMenu.setFrame(img`
        eeeee..eeeeeeeeeeeeeeee....eeeee.
        e775eeee777e777e777e777eeee5777e.
        e77775e5757e7575757e7575ee77777e.
        e77577575575755755757557e577575e.
        e57757575775775757757757e57577e..
        .e7775e7775e5757775e5757e55775e..
        .ee555eeeeeeeeeeeeeeeeeeeee55ee..
        .eeeeeeeeeeeeeeeeeeeeeeeee7775e..
        ee5777eeeeeeeeeeeeeeeeeeee75577e.
        e77555eeeeeeeeeeeeeeeeeeee77557e.
        e75577eeeeeeeeeeeeeeeeeeee57777e.
        e77775eeeeeeeeeeeeeeeeeeeee55eee.
        eee55eeeeeeeeeeeeeeeeeeeee57777e.
        e77775eeeeeeeeeeeeeeeeeeee77557e.
        e75577eeeeeeeeeeeeeeeeeeee55577e.
        e77557eeeeeeeeeeeeeeeeeeee7775ee.
        ee5777eeeeeeeeeeeeeeeeeeee75577e.
        e77555eeeeeeeeeeeeeeeeeeee77557e.
        e75577eeeeeeeeeeeeeeeeeeee57777e.
        e77775eeeeeeeeeeeeeeeeeeeee55eee.
        eee55eeeeeeeeeeeeeeeeeeeee57777e.
        e77775eeeeeeeeeeeeeeeeeeee77557e.
        e75577eeeeeeeeeeeeeeeeeeee55577e.
        e77557eeeeeeeeeeeeeeeeeeee7775ee.
        .e5777eeeeeeeeeeeeeeeeeeeeeeeee..
        .ee55eeeeeeeeeeeeeeeeeeeee555ee..
        .e57755e7575e5777575e5777e5777e..
        .e77575e75775775757757757575775e.
        e575775e75575755755757557577577e.
        e77777ee5757e7575757e7575e57777e.
        e7775eeee777e777e777e777eeee577e.
        eeeee..eeeeeeeeeeeeeeeee....eeee.
        .................................
        `)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 14)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 5)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 1)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu.close()
        inMenu = false
        if (selectedIndex == 0) {
            FadeToWhite(2000)
            color.pauseUntilFadeDone()
            ShowIntro()
            inGame = true
            SetUpGame()
        } else {
            game.reset()
        }
    })
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`stair2`, function (sprite10, location6) {
    sprite10.setVelocity(50, 0)
    sprite10.ay = 500
})
let barrilP: Sprite = null
let barrilR: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let nefer: Sprite = null
let kong: Sprite = null
let rario: Sprite = null
let textSprite: TextSprite = null
let inMenu = false
let in_title = false
let inGame = false
inGame = false
in_title = true
inMenu = false
FadeToWhite(4000)
scene.setBackgroundImage(img`
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b111
    6666666666666666666666666666cc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d1111
    6666666666666666666666666666f77666666cec66666cc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111
    66666666666666666666666666667fc66666c7cc666677f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111d6
    66666666666666666666666666666c8666667efc6667ecc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d1111d66
    6666666666666666666666c666666cffcc66ecfc666cfc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111d666
    66666666666666666666eeeeeeeeeeeeecc6effc6efeeeeeee6666eeee6666666666666eeeeeeeeee666666666eeeeeeeeeeeee66eee66666666666ee666666eeee666666666666ee66661111bbb6666
    6666666666666666666eeeeeeeeeeeeeeeeecfcfceeeeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeee6666666eeeee6666eeeeeeee6666666eeeee66d1111ddd6666
    66666666666666ccccee44444444444444eeecceee45555555eeee44444eee6666666ee444444444444eeeeee44444444444444ee444ee6666666ee4eee666ee4444eee666666ee44ee111111db66666
    66666666666666cbcfeeee5555555555555eeeeee5555ee44554eee45555eee66666ee4eee55555555554eee555555555555554ee555eeee6666ee455ee666eee5555eee66666ee54eee111111166666
    6cc666666666ccffc66eee4555eeeeeee55eeeee5554eeeeee554eeee5555eee666ee45eee4555eeee5555ee55eeee455eeeeeeee555eeeee666ee5554ee66eeee5555eee6666ee54eeee1dbbbdd6666
    6cc666666666ccffc666ee4555eeeeeee45eeee5554ee444eee55eeeee5554eee66ee55eee4555eeeee5554e5eeeee455eeeeeeee555ee4ee666e45554eee666ee55555eee666ee54ee4e1dbbbdd6666
    6c7766666666fcf666666e4555ee4444ee5eee4555ee44444ee45ee4ee45554eeeee454e4e4555ee4ee4555e5ee4ee455e44444ee555ee44ee6ee45555eeee66ee555554eee66ee54ee4e11111166666
    6cc7e7cc666ceff6667cce4555ee4444eeeeee5554ee4444eeee5ee44ee5555eeeee55e44e4555ee44e4555eeee4ee455e44444ee555ee44ee6ee555554eee66ee5545554eee6ee54ee4e1111db66666
    66cccfcc666ccf86c7fffe4555ee444eeeeeee555ee444eeeeeeeee44eee5554eee55ee44e4555ee44e4555eee44ee455e4444eee555ee44eeee4544555eee66ee55e5555eeeeee54ee4e1111b666666
    666fcffc6cccff8c74eeee4555eeeeeeeeeee4555ee44eeeffeeeeeeeeee4555ee454ee44e4555ee4ee4555ee444ee455e444eeee555ee44eeee55ee555eeeedee55ee5555eeeee54ee4e111b6666666
    6666cccccccffffccccffe4555eeeeeeeeeee4555ee44eefffeeeeeeeeeee5555e55ee44ee4555eeeee5554ee444ee455e44eeeee555ee44eee454ee555eeee1ee55ee45555eeee54ee4e11666666666
    6666ccfcffffffffcfffce455555555554eee4555ee44effceee4554eeeeee555554ee44ee4555eeee5555ee444eee455e44ee6ee555ee44eee55eee455eeeeeee55eee45554eee54ee4e11666666666
    66666ffcfcffffffceeffe4555eeeeeeeeeee4555ee44efffee555eeeeeeee45555ee44eee45555555554eee444eee455e44ee6ee555ee44ee454eeee554eeeeee55eeee45554ee54ee4ed6dd11db666
    66666cffffffffcfcffffe4555eeeeeeeeeee4555ee44effce4554eee4eeeee5554e444eee455544444eeee444eeee455e44ee6ee555ee44ee45eeeee455eeeeee55ee4ee5555ee54ee4e1b1111d6666
    666666cffffffcccfffffe4555ee4444444eee555ee44fffee4554e4444eeee5554e444eee4555eeeeeee44444eeee455e44ee6ee555ee4eee55444445554eeeee55ee4eee5555e54ee4ebbbbbb66666
    c66666cfffffcffceefc7e4555ee44444eeeee5554e44ffcee4554e444eeeee5554e444e6e4555eeee4444444eecee455e44ee6ee555ee4ee455555555555eeeee55ee44eee555554ee4eddddddddd11
    ceefccfffffcfffffffece4555ee444eeeeeee4554ee4effee4554e444ee6ee5554e44e66e4555ee44444444eeccee455e44ee6ee555ee4ee55eeeeeeee55eeeee55ee44eee455554ee4e66666666611
    ceefccfffffcfffffffece4555ee44eeee45eee555eeeeffee4554e444ee6ee5554e44e66e4555ee4444eeeeecccee455e44ee6ee555eeee454eeeeeeee554eeee55ee44eeee45554ee4e66666666611
    7ffccfccffcceecffcecfe4555eeeeeeee54eeee555eeeeeee4554e44ee66ee5554e44e66e4555ee444eeee44cccee455e44ee6ee555eeee55ee44444ee555eeee55ee44eeeee5554ee4e6666666666b
    ffffff7cfc77ccccf7cffe4555555555554ee44eee45555555554ee44ee66ee5554e44e66e4555ee44ee44444eccee455e44ee6ee455554454e4444eeeee45554e55ee44ee66eee54ee4ebbcccc66b66
    fffffeccfc5cfcfffffffeeeeeeeeeeeeeee444eeeee455544eeee444ee66eeeeeee44e66eeeeeee44e444444eccceeeee44ee66eeeeeeeeeee444eeeeeeeeeeeeeeee44ee666eeeee44edbbbbbbbbbb
    666cffc8f7ffffffffffeeeeeeeeeeeeeee4444eeeeeeeeeeeeee4444ee666eeeee444e66eeeeee444e4444444ccceeeee44ee666eeeeeeeee4444ee111eeeeeeeeee444ee666eeeee44e6d111111111
    cfceefccfcfffffffeeeccfee4444444444444eeeeeeeeee44444444eee66666e44444e6666ee4444ee4444444cccccee444ee6666ee444444444eebbbbbee4444444444e66666eee444e66bbbbbbbbb
    667cccefffffffffc7efffffee44444444444eeeffeee4444444444eee666666ee444ee66666ee444ee4444444eccccee44eeeddd11ee4444444ee6666666ee44444444ee666666eee4ee66666666666
    66cffecfffffffff7fffccffeeeeeeeeeeeeeeefffffeeeeeeeeeeeee666666ceeeeeee66666eeeeee44444444bccccceeeeeccbc1beeeeeeeeeee66666666eeeeeeeeeee6666666eeeee66666666666
    1bcfefffffffffcecffff6ccffeeeeeeeeeeefffffff8eeeeeeeeeffc66666d11deee666666664eee444444444eccccccee6dddddd6666eeeeee666666666666eeeeeee66666666666ee666666666666
    bff87ffffffff6cfccc6cffcff66fff6cfffffffbcfffcfffddfffff8666dd111d1b66666666b44444444444444ccccccccc666666666666666666666666666666666666666666666666666666666666
    efc6cffcfffffc8cf8ccfcccfc6cfcfccffffcff66fffcbdd11bfffffc6dd1111d1ddd66666b444444444444444ccccccccccdb666666666666666666666666666666666666666666666666666666666
    fc66cf6ccfffffc6c66fc66c666ccffffffffcff666ffc66666666cfff6666666666666666b4444ee4444444444cccccccccc66666666666666666666666666666666666666666666666666666666666
    fc66cf6ccfffffc6c66fc66c666ccffffffffcff666ffc66666666cfff6666666666666666b4444ee4444444444cccccccccc66666666666666666666666666666666666666666666666666666666666
    c666666ccff6cfc6cccfc6cc66ccffffffffffff666ccfc66666666cffc66666666666666b44444444444444444eccccccccccb666666666666666666666666666666666666666666666666666666666
    6666666ccff66cc6c66f6c6666ccfcffffffcfff6eeeecf66666666eeeff666eeeeeeee66b44eee44444e44444eeeccccccceeeeeeee6666666666666666666666666666666666666666666666666666
    6666666cfff666c6666f666666cccfffffffffffeeeeeecf66666eeeeeeeceeeeeeeeeeeb4eeeeeeee44444e44eeeeeccceeeeeeeeeeeee6666666666666666666666666666666666666666666666666
    6666666fecf666666666666666ceefffffffcfcee4444eef666eee4444eeeee45555554eeeee4444eeeeee4e4ee44eecceee455555554eee66666666666c6c6666c6ccc666cc66666666666666666666
    666666ceeefc66666666666666becfffffc6cfceeee554eee6eee5554eeee45554ee4554eeeee45554ee44444ee55eeeee455554ee45554ee66666666666ce6666c6ccc66ecf66666666666666666666
    666666beeeff66666666666666f44cffff66cfffeee455eeeeee554eeeee4555eeeeee554eeeee45554eee44eee55eeee4555eeeeeee455eeee6666666666cccc6cccfc77ec666666666666666666666
    666666befeeff666666666666c4e4cffff86ccff8ee455eeeee554eeeeee555eee44eee55eeeee45555eeee4eee55eeee555eeee44eee454eeee6666666666ccc6cccfefcc6666666666666666666666
    666666b4fecf8666666666666c4eecfff66ccecff6e455eeee554eee4ee5554ee4444ee555eeee455555eeeebee55eeee554ee444444ee54eeee66666666666fcccffcfff66666666666666666666666
    666666bfecffc666666666666c4eecfff66cefefffe455ee554ee444ee4555ee444eeee5554eee45445554eeeee55eee555ee4444eeeeeeeee4ee6666666666ccfcffffff6ccccc66666666666666666
    666666cecfff66666666b6666c4cfffff6644eccffe455e554ee4444ee5554ee444eece4555eee454e45554eeee55eee554ee444eeccceeeeeeee66666666666ffffffeeeeccccfc6666666666666666
    6666666cffff6666666bbb666ceefff86664eeefffe455554ee44444ee5554e444ee44e4555eee454ee5555eeee55eee554e444eecccceeeeeeee6667ccc7ccccfffccccffff666c8666666666666666
    6666666cffff6666666bbb666ceefff86664eeefffe455555eee444eee5554e444ee4444555eee454eee5555eee55eee554e444eeccceee554eeee667ccc7ccccfffccccffff666c8666666666666666
    66666666fff66666666bbbb666ecfff666c44ccfffe4555555eee4eeee5554e444e44444555eee454eee45554ee55eee554e444ecccee4554eeeee67cc7bffff7eceecfffffcc6666666666666666666
    66666666ecf6666666bbbbbb66cefff666c4efcfffe455e5555eeeeeee5554e44ee4e444555eee454e4ee45554e55eee554e44eecccee555eee44eec666f8ff7cfcefffffffccc666666666666666666
    66666666eff666666bbbbbbbb66efff666ceffcff6e455e45555eeeeee5554ee4eee44e4554eee454e44ee4555455eee454ee4eecccee555ee444eec66666c7ccfcfcffc66ccff666666666666666666
    666666664cf66666bbbbbbbbb66eeef6666ceffff6e455ee45555eeeee4555ee4ee444e5554eee454e44eee555555eee455ee4eecccee555ee444ee666666cc6cfffcffc666688866666666666666666
    666666664ec66666bbbbbbbbbb6eeef66666ceff66e455eee45555eeeee555ee4eee4ee555eeee454e444eee55555eeee55ee4eecccee555ee44eee666666c66ffcffcff866666866666666666666666
    66666666eef6666bbbbbbbbbbbbeeff66666c4fc66e455eeee45555eeee4554eeee44ee554ee4e454e44eeee45555eeee554eeeecccee555ee44ee66666cf666866fc66ff86666666666666666666666
    666666664ef666bbbbbbbbbbbbbecff66666c4cf66e455ee4ee45555eeee5554eeeeee455ee44e454e44eeeee4555ee4e4554eeeeeeee555ee44ee66666cf6668666c66c6c8666666666666666666666
    999966664cf66bbbbbbbbbbbbbbe4ef66666c4ff66e455ee44ee455554eee5554eeee455ee444e454e44ee4eee455ee4ee4554eeeeee4555ee44ee66666cf666869cf66666f666666666666669999999
    666666764efcbbbbbbbbbbbbbbbeecf66666c4cf66e455ee444eee555554ee455555555eee44ee454e44ee44eee55ee44eee55555555554eee44ecb66666666c667cc999978c66666666666666666666
    999766664efbbbbbbbbbbbbbbbbe4cf67666ceff66eeeeee44eeeeee44eeeeee455554eee444eeeeee44ee444eeeeee44eeeee455554eeeee444ecc66689999c999cec99999666666666666669999999
    99779996bcfbbbbbbbbbbbbbbbb44ffd7666c4cfb9eeeee444eeeeeeeeeeeeeeeeeeeee44444eeeeee44ee4444eeee444eeeeeeeeeeeeee44444ecccb9799996999ccc99966799999679766666679999
    b99999964efbbbbbbbbbbbbbbbb4effd9999c4cfd999e4444eee4eeee4444444eeeeee44444eeebee444ee44444ee444eeceeeeeeee44444444eeccccb799999999fec99999999999999999999999999
    b99999964efbbbbbbbbbbbbbbbb4effd9999c4cfd9999e444eed44eee444444ee444444444ee4bbeee4ee4444444ee44eccceee44444444444eecccccb799999999fec99999999999999999999999999
    f99999964ffbbbbbbbbbbbbbbbb4eefd9999c4efd999beeeeeb5ddcfeeeeeeeeeeee444eeee44444eeeee44444eeeeeeecccceeeeeeeeeeeeeeccccccccb9999999fe899999999999999999999999999
    c99999964efbbbbbbbbbbbbbbbb4ecfd9999c4ffd999beeefc7dddefcc444e44444444444444444444444444444444e44ccccccccccccccccccccccccccb9999999fcc99999999999999999999999999
    c99999964cfbbbbbbbbbbbbbbbbfecfd9999c4cfb999deccfcdeee4cfce44444444444444444444444444444444444bb4cccccccccccccccccccccccccccc999999fe899999999999999999999999999
    c99999964efbbbbbbbbbbbbbbbb4effd9999ceffb99bdbbceddebbeeecce444444444444444444444444444444bbb4bbeccccccccccccccccccccccccccccb99999fe899999999999999999999999999
    c99999964cfbbbbbbbbbbbbbbbbeeffd9999e4efd99cffe7dbddccbbcccfe4444444444444444444444444444444eec4cc4cccccccccccccccccccccccccccb9999fcc99999999999999999999999994
    f99999964efbbbbbbbbbbbbbbbbeecfd9999e4efbbcbdddbdeedddececccc444444444444444444444444444444444cbcc4ccccccccccccccccccccccccccccb999eec99999999999999999b4e9999be
    f99779964efcbbbbbbbbbbbbbbbe2efd9999b4cfc7d5dddedccedddcfecccc44444444444444444444444444444444cbcc4ccccccccccccccccccccccccccccc799ee67699999779999999b4cc99996e
    f9766996effcbbbbbbbbbbbbbbbefcfd99dd4effddddde4e4eedbbd4cfccfc4444444bb44447b444444444444444b4cbbb4cccccccccccccccccccccccccccccb99ceccc799666c999999defff69996e
    c79969964efcbb66bbbbbbb6bbb4ecf697bd44cfcecbdefeeccbee4ecffffcb4bbbbbccbbbcccbbb444444bbb444b4cbbb3cccccccccccccccccccccccccccccc69fec9c9996c6666666bbcc4ee7b7e4
    fbdd777e4ef666666666666666b4fffbddbd44cff5ebddffefbdccfffffffbbbbbbbb6bb66666b666b6bbbbcb4bbbbcbbb3ccccccccccccccccc6bbccccccccccc7eec9c6666cbddddddecfeececcefe
    ee444eeeecfcee4ee7ddddddddd4ecfcbdee4efffbcbe4effced44cffffffcdddbdbbbbb6cbcddddddddddbcbbbbbbbbbbdbbbbbbbbbb6bccb66b4cbdbbbbbbdd44cee7cbcc7edddd4444cbdbeeeeecf
    ee444eeeecfcee4ee7ddddddddd4ecfcbdee4efffbcbe4effced44cffffffcdddbdbbbbb6cbcddddddddddbcbbbbbbbbbbdbbbbbbbbbb6bccb66b4cbdbbbbbbdd44cee7cbcc7edddd4444cbdbeeeeecf
    ffcfcccf4effcce4ecedddbb7dd42cfbedfeeeffbefccecfffedccffbcfffcdddddddb77bd7bddddddddddbbbbddbbdddddddddddbdd7bcb666bc4cddddddbdd44ccecbbddb744e44eecfddd4eefccc4
    ffffffff4effffccffcc7bddddd4ecfecdfe4effbefbccffffe4ddefdeffcc7bdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4446c666744ccbbbbbbbbb4efeecbbbb7b4eff4ccfeddd4ccedddd
    cceccccc4effcecffccc7b7ddddecff7cdcc44efeefbcfffecfceedbfbcccccc777cbdbbdddddddbccccebcccc4cccccb4bc4bccccbbbbcbb44ecccbddd4ecebd4deeedddd444ecceccdddd3eccdddd4
    ffffffffeeffffffecfccbddd774effdc5cfb4efcffcccfcedcffffcffccffdddddddddddbdddddddddddbcced4ddd4bd4444cccccbbcbcc4bcccebddde4dddddddeeeddddddd4cecbddd4ddddddddde
    ffffffff4effccffccfffcddddd4effdeeeee4cfceceeeceeceeeeceefffffcbddbb77dddddbddddddddddd7bbeb44bcb44bebd7d544b444ebbbd4d4eeeddddddddeeeddddddd4e4cbddddddddddd4ec
    ffffffff4cfffcccccccccbdddd4ecfeeefee4cfceceefeeffefeeefeffffffffccccbdd7dddd4ccddddddddddddeee4ddd44bdd7c44d44eddd44e4dddd444444eceeedd4ece444e4cc44e44ddd44444
    cccfffffeeffccccfffccffccbd4ecffcffceecffffffffcffffccfffffffffffcdddddddd777ecce4cbdddddddddddddd4cccbddddd444ddd4ece4e4eb4444eeecceeddcceececceccebdd44eece44e
    cccfffff4effcffcfffffcccfcd44cf44444e2cfb4444444e44444444eccccccccdddddddd7c7ccff4ecdddcbddddddd77eeeeeb4ddd4dd77becccccedd4bbe7ddeeee77ccfcccfeffcdddddecfcfe7c
    cbcfffffefffccccfffeffccccfeeffeeeceeeffeeeceeeeeceeeeeeeecffffffccbdddd7c7cfffff77ef77cfcee777cccdddddddddddddddddddd577ccbbc777ddeccccffccffcffccc7e77ecfccc8c
    fccff7fc4cff7ccccccccf7ccfbeeff4ecfeeefce4cf444cffe444444efffffcfffbdd4eecffffffcfcffcfffcc7cfcc8c7ddddddddddddddddddd77cccccccccceeef8f7cccfcffccffccccffcccffc
    cbcffcfe4fcfcc8fcccccfcfcfceecf4effceefceeff444ffff444444efffffcffcbdbcccffffffffffffffffff7ccf8ffccddddddddddddddddde7cfc7cccfffccbeffccfbefcfccfcffccfff7c8cff
    cbcffcfe4fcfcc8fcccccfcfcfceecf4effceefceeff444ffff444444efffffcffcbdbcccffffffffffffffffff7ccf8ffccddddddddddddddddde7cfc7cccfffccbeffccfbefcfccfcffccfff7c8cff
    cbcfccfc4eccffcfcccffffffcc4effbcfffeeffeeff44effffcee444efffffcfcccbddccccccccccccccccccccccccccccceddddddddddddbb77ecccccffff7cffeefccfcfccfccffffccc7fcccffff
    cfccccff4ecc7fcfcccffffffee4ecfb44eeeecfe4444444ec4b444444eccccccccccebddddddddddddddddddddddddddddddddddddddddddd7ccffcccffffccffc4efcffcffffffffcccf7cffffffff
    cccfffffecfccccccfffffcccffeeffeeecceecfcefeeeeefcefeeeeeeffffccccffffffbbbbbbbbbbbbddddddddddddddddddddddddddddddeffffffffffcfffffeefccffffffffffffcfffffffffff
    cbcccccf4efffcffffffffccffc44ffe4444eeffb444444444444444444ccccccccccccced44bbebbbbbdddddddddddddddddddddddddddddbcccccccccccccccf5cefeccccccccccccccccccccccccc
    dbbddddb4cffccfffffceffccfc4effcbddd44cfcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44cefdddddddddddddddddddddddddd
    ddbddd7b4cffffffffffcccffcc4fffcd7e7eecffeddd7e77ebeddddddd4b5dde7eccddbdedddddddddddddddddddddddddddddddddddddddddddddddddddddd4ec4cfcddddddddddddddddddddddddd
    ddbddceeeefff7ccffff7cfcccf4effc77eceefffc77eef7e7ecccddd77cc7e77cfffccfcfddddddddddddddddddddddddddddddddddddddddddddddddddddd4eceeffcddddddddddddddddddddddddd
    dbcc7ecc4cfcfccffffccccccfc4ecf7eccfe4cfeecc7ffcfccfccfc7ccfffeccffffcfccfcedddddddddddddddddddddddddddddddddddddddddddddddddddbeeececcbdddddddddddddddddddddddd
    dbcfccff4efffccccf7cfffcfff4cffccfffe4efccffffffffffccffffffffcfcffcfccfffffcdddddddddddddddddddddddddddddddddddddddddddddddddddffffffcffddddddddddddddddddddddd
    ebefcfff4effffffffcffffcfff4ecfcffffeecfcffffffffcfffffffcccffcffcffffffffffcfbbb444b444444444444444444444444dddddddddebddddddde4ee44efffedddddddddddddddddddddd
    cfcfffffeefffffffffffffffff4bcffffffeecffffffffffffffffffffffffffffffffffffcfcffceeeeeeeeebbddddddddddddddddddddddddd444fdddddde4cffccfffedddddddddddddddddddddd
    cfcfffffeefffffffffffffffff4bcffffffeecffffffffffffffffffffffffffffffffffffcfcffceeeeeeeeebbddddddddddddddddddddddddd444fdddddde4cffccfffedddddddddddddddddddddd
    7ffffffc4cfffffffffffffffff4efffffffeecfffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeceffddddddeeeeefffffedddddeeddddddddddddddd
    cccb777eecfce7dddddddddddde4fffddddb4fffbddddddddddddddddddddddddbccbbbbb4ddddddddddddddddddddddddddddddddddddddddd4cfcfffddddde4eccfffffeddddcccbbddddddddddddd
    fffffc7c4eff7cdddddddddddde4effbdddb4effbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4fffccffeeecfeee44bbcfffccccffffeeeeeeeeeeeeee
    cbcfffff4cffcccddddddddde7c4ecffeddeefffbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4eeeeeeeee4dddd4deeeeeeeeeebbeeeeeebbbeeeeebbbb
    fffffffc4fffffcebbbbbbb7cec4ecff7cde4fffccbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    fccfffffecffff7ccddddb7ecee4cfffcfeeecffccddddddddddddddddddddddddddd44dddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4edddddddddd
    fccfffffccffc7ecff7c77cfffceefffccf7efffbcddddddddd7ffbdddddddddddddddddddddddddddddddddddddddddddddddddddddd4feedddddcbdddddddddddddddddddddddddddddddddddddddd
    cccfcfffccffcccffecc7eeffffeffff7fffffffcfcdddddc777ccc74ddddddddddddddddddddddddddddddddddddddd4edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    f7c7cffcfff77fffccccccccfffccffcc7c7ccffcfed7c77c7eccc787ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddeedd
    7b7cffffff7ecfffcfffeefcfffffff7ec7fcfff7ccccf7ffecfcccfccedddddddddddddddbddddddddddddddd4bbdddddddddddddddddddecdddddddddddddddddddddddddddddddddddddddddddddd
    cfccffffffcccffc77e7cccccffccc7ccfccccc7ccfc7e7ccc7cccfccfcbdddddddddddddbbddddddddddddddddcbdddddddddbdddddddddecbddddddddddddddddddddddddddddddddddddddddddddd
    cfccffffffcccffc77e7cccccffccc7ccfccccc7ccfc7e7ccc7cccfccfcbdddddddddddddbbddddddddddddddddcbdddddddddbdddddddddecbddddddddddddddddddddddddddddddddddddddddddddd
    ecfffffffffffccccf78ffffffff77ccfffffffccffccccffccfccffffc7bbbeee4dddddddddddddddddddddddddddddddddddedddddddddddddd444dddddddddddddddddddddddddddddddddddddddd
    fbcfffffffffcfcccfc7cffffffffcccffffccccfffcccfffcffffffffffcbbbbbbcdddddddddddddddddddddddddddddddbb4e4ddddd4ddddddddddd44dedddddddddddddd44dddbddddddddddddddd
    ffffffffffffffcf77cf777cfcfffffffffffccfcfffffffffffffffffffffffffcccbdddddddddddddddddddddddddddddddddddddddecdddddddddddd4cbdddddddddddddd4bddddddddddddd4fddd
    fbcfffffffffffcccfffffcffffffffffffffffffffffffffffffffffffffffffffceeebbbdddddddddddeeecccccceeedddddddddddd444ebbbdddddddddd4ddddddddddddd444dddd44dddddd444dd
    fccffffcccfccffffffffffffffffffffffffffffffffffffffffffffffffffffccccceeeeebbbbbbeeeeeeccccccccebbbbbbbbbbbbbbbbccccbbbbbbbddddddddddddddddddddddddddddddddddddd
    ccfffff4cee4efffffffffffffffffffffffffcfffffffffffffffffffffffffccccccccebeeeeeeeceeecccccccccbeeeceebddeeeecccccccccccceeeeeedbbddddddddddddddddddddddddddddddd
    bbbb444bdddeebb4eefffffffccceef4bbbcffffe4cfffeecfffffffffffffccccccccebeeeeeeeeeebeeeccccccccebbbbeeee4bbeeeecccccccccccceeebbd4ebbbbbbbedbbdddddddddddee4ddddd
    dbdd4ddbbddddd44befbddddddddddddd444bbbd4fcceeeeefffffffffffcceccccccceeeeeeeeee4bdddbeecccccceeeeeeeeeeebbbeeecccceeeccebebeeeeeeeeeebbbbbbbbbbdddddddddddddddd
    dddddddddddddddbbb444dddddddddd4dd4eebdddd444bddecfffffccccceeeeeeeeeeeeeeeebb44dd4ddd4444bbeeeeebbeeeeeebeeeeeb444444beeeeebdddbbbeeeebbbbbbbbbbbdddddddddddddd
    ddddddddddddddddddddddddddddddddddddddd4eecfff4deccedddbbeeeeeeeeeddddddddbeeeebddddddddddddddddeeeeeeee44eeeeeeeddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
SpawnText("Press Start", 76, 110)
while (in_title) {
    textSprite.setFlag(SpriteFlag.Invisible, false)
    pause(1000)
    textSprite.setFlag(SpriteFlag.Invisible, true)
    pause(1000)
}
forever(function () {
    if (inGame) {
        for (let index = 0; index < 999999; index++) {
            pause(3000)
            barrilR = sprites.create(assets.image`barril1`, SpriteKind.barril)
            tiles.placeOnRandomTile(barrilR, sprites.dungeon.chestClosed)
            barrilR.setVelocity(-50, 0)
            barrilR.ay = 500
        }
    }
})
forever(function () {
    if (inGame) {
        for (let index = 0; index < 999999; index++) {
            pause(3000)
            barrilP = sprites.create(assets.image`barrilP`, SpriteKind.Projectile)
            tiles.placeOnRandomTile(barrilP, sprites.dungeon.chestOpen)
            barrilP.setVelocity(50, 0)
            barrilP.ay = 500
        }
    }
})
