import { throws } from "assert";

class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }
    preload() {
    }

    create() {
        this.add.text(0, 0, 'Hello World', { fontFamily: '"Roboto Condensed"' });
    }
}

export default TitleScene;