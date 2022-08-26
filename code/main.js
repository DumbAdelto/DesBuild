import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("bean", "sprites/bean.png")

loadSprite("ground", "sprites/ground.png");

loadSprite("dirt", "sprites/dirt.png");

loadSprite("inv", "sprites/inv.png");

// add a character to screen
const player = add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(),
	body(),
])

player.onUpdate(() => {
	camPos(player.pos),
});

map = [
	'                                                                                                  ',
	'                                                                                                  ',
	'                 ======================                                                           ',
	'                 ++++++++++++++++++++++                        									',
	'                 ++++++++++++++++++++++                        									',
	'                =++++++++++++++++++++++====                   								       ',
	'                ++++++++++++++++++++++++++++                   									',
	'               =++++++++++++++++++++++++++++=                                                     ',
	'             ==++++++++++++++++++++++++++++++=====================                                ',
	'=============+++++++++++++++++++++++++++++++++++++++++++++++++++++===============================',
	'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
	'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
]

const lvl1Cfg = {
	width: 64,
	height: 64,

	'=': () => [
		sprite("ground"),
		'block',
		area(),
		solid(),
	],
	'+': () => [
		sprite("dirt"),
		'dBlock',
		area(),
		solid(),
	]
}

const game_lvl = addLevel(map, lvl1Cfg)

keyDown('d', () => {
	player.move(200, 0)
})

keyDown('a', () => {
	player.move(-200, 0)
})

keyDown('space', () => {
	player.jump()
})

keyPress('i', () => {
		sprite("inv"),
		pos(player.pos),
		'inv'
		area(),
		solid(),
})
// burp on "b"
onKeyPress("b", burp)