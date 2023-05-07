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
        let game = this.add.text(this.w * 0.5, this.h * 0.5, "🎮")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A 'game' your friend sent you this morning.\nIt doesn't even seem complete.");
            })
            .on('pointerdown', () => this.gotoScene('bridge'));
    }
}

class Folder extends AdventureScene {
    constructor() {
        super("folder", "Game Folder");
    }

    onEnter() {
        let file = this.add.text(this.w * 0.2, this.h * 0.2, "📄")
            .setFontSize(this.s * 2)
    }
}

class Bridge extends AdventureScene {
    constructor() {
        super("bridge", "Bridge");
    }

    preload() {
        
    }

    onEnter() {
        this.showMessage("…Did it throw me somewhere in the middle of the game?\nIt doesn't seem like the actual start.");

        let brian = this.add.text(this.w * 0.5, this.h * 0.5, "🧍‍♂️")
            .setFontSize(this.s * 2)
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

                let castle = this.add.text(this.w * 0.6, this.h * 0.6, "🏰")
                    .setFontSize(this.s * 2)
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

        let daero = this.add.text();
        let ninnin = this.add.text();
        let dragonath = this.add.text();
        let gosei = this.add.text();
        let soysauce = this.add.image(this.w * 0.3, this.h * 0.3, "soysauce")
            .setScale(0.1)
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
                soysauce.destroy();
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

    }

    onEnter() {
        let musha = this.add.text(this.s * 0.4, this.s * 0.5, "👺")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("ムシャムシャしてきた");
            })
            .on('pointerdown', () => {
                if (this.hasItem("Soy Sauce")) {
                    this.loseItem("Soy Sauce")
                    this.gotoScene('outro');
                }
                this.gotoScene('Error');
            })
    }
}

class Error extends Phaser.Scene {
    constructor() {
        super("error");
    }

    preload() {

    }

    onEnter() {

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
    scene: [Intro, Demo1, Demo2, Outro, Desktop, Folder, Bridge, FourKings, DarkLord, Error],
    title: "Adventure Game",
});

