class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        });
    }
    preload() {
    }

    create() {
        this.add.image(this.game.config.width/2, this.game.config.height/2, 'earth');
        this.add.text(this.game.config.width / 4 + 50,  this.game.config.height / 3, "Project 4X", {
            fontFamily: 'Arial Black',
            stroke: '#ffffff',
            strokeThickness: 6,
            fontSize: 50,
            color: '#ae34df'
        });

        let playbutton = this.add.text(this.game.config.width / 2, this.game.config.height/2, "Play", {
            color: '#c4e3d2'
        })
        .setInteractive({useHandCursor: true})
        .on('pointerover', () => playbutton.setStyle({ color: '#ffffff'}))
        .on('pointerout' , () => playbutton.setStyle({ color: '#c4e3d2'}))
        .on('pointerdown', () => this.scene.start('GameScene'));
    }
}

export default TitleScene;