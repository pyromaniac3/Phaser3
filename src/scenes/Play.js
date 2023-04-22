class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        // load images/tile sprites
        this.load.image('rocket','./assets/rocket.jpg');
        this.load.image('ship','./assets/ship.jpg');
        this.load.image('space','./assets/space.png');
    }

    create(){
        // place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480, 'space').setOrigin(0,0);
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        // add rocket (p1)
        this.p1Rocket = new Rocket(this,game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0,0);
    }

    update(){
        this.starfield.tilePositionX -=4;
    }
}
