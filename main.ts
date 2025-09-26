enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const ETC = SpriteKind.create()
    export const Titlescreen = SpriteKind.create()
    export const Minimap = SpriteKind.create()
}
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    _44.setImage(assets.image`myImage32`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage1`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Over Here!", 500, true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile1, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile12`)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    _2spr.setImage(assets.image`myImage16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    _44.setImage(assets.image`myImage19`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`myImage20`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    mySprite.vy += 5
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    _2spr.setImage(assets.image`myImage18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    music.play(music.createSong(assets.song`mySong5`), music.PlaybackMode.UntilDone)
    game.splash("You found a key!")
    tiles.setCurrentTilemap(tilemap`level_01`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile22`)
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (controller.right.isPressed()) {
        mySprite.setImage(assets.image`myImage8`)
    }
    if (controller.left.isPressed()) {
        mySprite.setImage(assets.image`myImage9`)
    }
    if (controller.up.isPressed()) {
        mySprite.setImage(assets.image`myImage10`)
    }
    if (controller.down.isPressed()) {
        mySprite.setImage(assets.image`myImage3`)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    _2spr.setImage(assets.image`myImage15`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage0`)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    _2spr.setImage(assets.image`myImage30`)
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`myImage13`)
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    _44.setImage(assets.image`myImage34`)
})
mp.onLifeZero(function (player2) {
    music.play(music.createSong(hex`0040000408030604001c00100500640000041e000004000000000000000000000000000a0400041e0000000400011d08000c00011d2c003000011e30003400011d34003800011e05001c000f0a006400f4010a00000400000000000000000000000000000000021e0014001800012520002400012524002800012538003c0001223c004000012206001c00010a006400f4016400000400000000000000000000000000000000022a000c00100001241000140001252000240001252400280001252c003000011e30003400011d34003800011e07001c00020a006400f40164000004000000000000000000000000000000000336000c00100001241000140001251400180001252000240001252400280001252c003000011e30003400011d34003800011e3c004000012208001c000e050046006603320000040a002d0000006400140001320002010002360018001c00012a1c00200001292000240001252400280001252c003000011e30003400011d34003800011e38003c0001223c004000012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180018001900010a1c001d0001093800390001063c003d000105`), music.PlaybackMode.UntilDone)
    game.setGameOverMessage(false, "Good Night!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (info.score() == 3) {
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
    }
    if (info.score() == 2) {
        music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000040d002400280002191e28002c00011d04001c00100500640000041e000004000000000000000000000000000a040004060028002c00012407001c00020a006400f401640000040000000000000000000000000000000003120000000400011e08000c0001250c001000011e08001c000e050046006603320000040a002d0000006400140001320002010002120014001800012418001c0001271c002000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600240025000108`), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile12`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level_3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    _44.setImage(assets.image`myImage33`)
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`myImage21`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (info.score() == 2) {
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
        tiles.setCurrentTilemap(tilemap`level28`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile38`)
    }
    if (info.score() == 1) {
        music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000040d002400280002191e28002c00011d04001c00100500640000041e000004000000000000000000000000000a040004060028002c00012407001c00020a006400f401640000040000000000000000000000000000000003120000000400011e08000c0001250c001000011e08001c000e050046006603320000040a002d0000006400140001320002010002120014001800012418001c0001271c002000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600240025000108`), music.PlaybackMode.UntilDone)
        game.splash("You need a fish key! hint: it is somewhere in here!")
    }
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    P3.setImage(assets.image`myImage31`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level_5`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile14`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    if (info.score() == 2) {
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
        game.splash("You found a Goo orb")
        if (controller.B.isPressed()) {
            mySprite2 = sprites.create(assets.image`myImage13`, SpriteKind.Player)
        }
        if (controller.right.isPressed()) {
        	
        }
    }
    if (info.score() == 1) {
        music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000040d002400280002191e28002c00011d04001c00100500640000041e000004000000000000000000000000000a040004060028002c00012407001c00020a006400f401640000040000000000000000000000000000000003120000000400011e08000c0001250c001000011e08001c000e050046006603320000040a002d0000006400140001320002010002120014001800012418001c0001271c002000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600240025000108`), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (info.score() == 2) {
        music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.UntilDone)
        tiles.setCurrentTilemap(tilemap`level28`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile38`)
    }
    if (info.score() == 1) {
        music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000040d002400280002191e28002c00011d04001c00100500640000041e000004000000000000000000000000000a040004060028002c00012407001c00020a006400f401640000040000000000000000000000000000000003120000000400011e08000c0001250c001000011e08001c000e050046006603320000040a002d0000006400140001320002010002120014001800012418001c0001271c002000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600240025000108`), music.PlaybackMode.UntilDone)
        game.splash("You need a key! hint: it is somewhere in the pool!")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(myEnemy)
        info.changeScoreBy(1)
        music.play(music.createSoundEffect(WaveShape.Sine, 1, 3607, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        info.setLife(100)
    }
})
let mySprite2: Sprite = null
let myEnemy: Sprite = null
let _44: Sprite = null
let P3: Sprite = null
let _2spr: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
let TITLE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Titlescreen)
animation.runImageAnimation(
TITLE,
assets.animation`myAnim`,
200,
true
)
TITLE.sayText("Loading…", 5000, true)
pause(5000)
scene.setBackgroundColor(15)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.TopLeft)
splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.TopRight)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
_2spr = sprites.create(assets.image`myImage16`, SpriteKind.Player)
P3 = sprites.create(assets.image`myImage13`, SpriteKind.Player)
_44 = sprites.create(assets.image`myImage19`, SpriteKind.Player)
controller.player2.moveSprite(_2spr)
controller.player3.moveSprite(P3)
tiles.setTilemap(tilemap`level_3`)
info.setLife(100)
pause(100)
scene.cameraFollowSprite(_2spr)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 5 5 4 4 5 5 4 4 4 . . 
    . . 4 4 4 5 5 4 4 5 5 4 4 4 . . 
    . 4 4 4 4 5 5 4 4 5 5 4 4 4 4 4 
    4 4 . 4 5 4 4 4 4 4 4 5 4 4 . 4 
    4 . . 4 5 5 5 5 5 5 5 5 4 4 . 4 
    4 . . 4 5 5 5 5 5 5 5 5 4 4 . 4 
    4 . . . 4 4 4 4 4 4 4 4 4 . 4 4 
    4 4 . . . 4 4 4 4 4 4 4 . . 4 . 
    4 4 4 4 . . . . . . . . 4 4 4 . 
    4 4 4 4 . . . . . . . 4 4 4 4 . 
    4 4 4 4 . . . . . . . 4 4 4 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 50)
myEnemy.setPosition(126, 57)
mySprite.setPosition(47, 120)
game.setGameOverMessage(false, "Good night!")
game.setGameOverMessage(true, "You saved Mario!")
sprites.destroyAllSpritesOfKind(SpriteKind.Titlescreen)
forever(function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Four))) {
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, _44)
    }
})
forever(function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three))) {
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, P3)
    }
})
forever(function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, _2spr)
    }
})
forever(function () {
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        tiles.setTilemap(tilemap`level_3`)
    }
})
forever(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        pause(100)
        info.changeLifeBy(-1)
    }
})
