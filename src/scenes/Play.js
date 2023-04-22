class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        // load images/tile sprites
        this.load.image('rocket','./assets/rocket.jpeg');
        this.load.image('ship','./assets/ship.jpeg');
        this.load.image('space','./assets/space.jpeg');
    }

    create(){
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
    }
}
