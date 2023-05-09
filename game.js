// Global Flags
let bugFixed = false;

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Desktop extends AdventureScene {
    constructor() {
        super("desktop", "Desktop");
    }
    
    onEnter() {
        this.showMessage("Not pictured: too many screenshots I forgot to clean up.");

        let game = this.add.text(this.w * 0.3, this.h * 0.5, "🎮 CoolGame")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A 'game' my friend sent you this morning.\nIt doesn't even seem complete.");
            })
            .on('pointerdown', () => this.gotoScene('bridge'));
    }
}

class Folder extends AdventureScene {
    constructor() {
        super("folder", "Game Folder");
    }

    onEnter() {
        this.showMessage("Wait, that filename looks weird.\nJust where was it pulled from?");

        let file = this.add.text(this.w * 0.2, this.h * 0.2, "📄 EnemyGraphic〜Musha")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage(">Rename");
            })
            .on('pointerdown', () => {
                file.setText("📄 EnemyGraphic~Musha");
                file.on('pointerover', () => {
                    this.showMessage("That's better.");
                    bugFixed = true;
                });
                file.on('pointerdown', () => {
                    //do nothing
                });
            })
    }
}

class Bridge extends AdventureScene {
    constructor() {
        super("bridge", "Bridge");
    }

    preload() {
        this.load.audio('damage', 'assets/Damage1.mp3');
        this.load.image('brian', 'assets/Hero1.png');
    }

    onEnter() {
        this.showMessage("…Did it throw me somewhere in the middle of the game?\nIt doesn't seem like the actual start.");

        let brian = this.add.image(this.w * 0.5, this.h * 0.5, 'brian')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage(">BRIAN: \"I WANT TO JOIN YOU!!!!!\"");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: brian,
                    x: 0,
                    y: 0,
                    duration: 300,
                });

                let damage = this.sound.add('damage');
                damage.play();

                let castle = this.add.text(this.w * 0.6, this.h * 0.6, "🏰")
                    .setFontSize(this.s * 10)
                    .setInteractive()
                    .on('pointerover', () => {
                        this.showMessage(">Proceed to Dark Lord's Castle");
                    })
                    .on('pointerdown', () => {
                        this.gotoScene('fourkings');
                    })
            })
    }
}

class FourKings extends AdventureScene {
    constructor() {
        super("fourkings", "Game Room");
    }

    preload() {
        this.load.image('soysauce', 'assets/syoyu.png');
    }

    onEnter() {
        let counter = 0;

        let daero = this.add.text(this.w * 0.3, this.h * 0.5, "💻");
        let ninnin = this.add.text(this.w * 0.3, this.h * 0.3, "👺");
        let dragonath = this.add.text(this.w * 0.2, this.h * 0.4, "🐉");
        let gosei = this.add.text(this.w * 0.5, this.h * 0.5, "💀");
        let soysauce = this.add.image(this.w * 0.3, this.h * 0.3, "soysauce")
            .setScale(0.1)
            .setAlpha(0.1)
            .setInteractive()
            .on('pointerover', () => {
                this.tweens.add({
                    targets: soysauce,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: "Sine.inOut",
                    duration: 500,
                });
            })
            .on('pointerdown', () => {
                this.gainItem("Soy Sauce");
                this.showMessage("Why is a beverage like this in the game?")
                soysauce.destroy();
                this.gotoScene('darklord');
            })
        
        if (counter >= 4) {
            let warp = this.add.text(this.w * 0.3, this.h * 0.3, "🌀")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage(">Proceed to Final Room");
                })
                .on('pointerdown', () => {
                    if (bugFixed == false) {
                        this.gotoScene('error');
                    }
                    this.gotoScene('darklord');
                })
        }
    }
}

class DarkLord extends AdventureScene {
    constructor() {
        super("darklord", "Last Room");
    }

    preload() {
        this.load.image('musha', 'assets/Samurai.png');
        this.load.audio('damage', 'assets/Damage1.mp3');
        this.load.audio('water', 'assets/Water2.mp3');
        this.load.audio('mushamusha', 'assets/mushamusha.mp3');
        this.load.audio('shoyuoisii', 'assets/shoyuoisii.mp3');
    }

    onEnter() {
        let musha = this.add.image(this.w * 0.4, this.h * 0.5, 'musha')
            .setScale(4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("ムシャムシャしてきた");
                let mushamusha = this.sound.add('mushamusha');
                mushamusha.play();
            })
            .on('pointerdown', () => {
                if (this.hasItem("Soy Sauce")) {
                    this.loseItem("Soy Sauce");
                    
                    let water = this.sound.add('water');
                    water.play();

                    

                    this.tweens.add({

                    });
                    
                    this.gotoScene('outro');
                } else {
                    this.gotoScene('gameover');
                }
            })
    }
}

class Error extends Phaser.Scene {
    constructor() {
        super("error");
    }

    preload() {

    }

    create() {
        this.add.text(50, 50, "ERROR: Could not read Assets/EnemyGraphic〜Musha.png\nClick anywhere to exit game.")
            .setFontSize(60);
        this.input.on('pointerdown', () => {
            this.scene.start('desktop');
        });
    }
}

class GameOver extends Phaser.Scene {
    constructor() {
        super("gameover");
    }

    preload() {
        this.load.audio("aaa", "assets/aaa.mp3");
        this.load.audio("water", "assets/Water2.mp3");
        this.load.audio("dig", "assets/Kill5.mp3");
        this.load.audio("explosion", "assets/Explosion6.mp3");
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('desktop'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro, Desktop, Folder, Bridge, FourKings, DarkLord, Error, GameOver],
    title: "Adventure Game",
});

