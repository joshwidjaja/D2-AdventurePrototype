A simple adventure game by Josh Widjaja based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Desktop, Folder, Bridge, FourKings
- **2+ scenes *not* based on `AdventureScene`**: Intro, Error, Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: Added a 'Folder' button to the interface - it will take the player to and from the 'Game Folder' scene at any point in the game. 
    - Enhancement 2: Added a global variable to keep track of the last scene visited before Folder (outerSceneKey).

Experience requirements:
- **4+ locations in the game world**: Desktop, Folder, Bridge, Castle 1F and 2F
- **2+ interactive objects in most scenes**: Brian, Soy Sauce, Samurai
- **Many objects have `pointerover` messages**: Most ingame objects
- **Many objects have `pointerdown` effects**: Most ingame objects, except for non-renameable files
- **Some objects are themselves animated**: Soy sauce object 'flees' on pointerover

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)
- RPG Maker 2000 RTP provided some sprites and sound files.
    - I removed the sprites' backgrounds in krita.
- [VIPRPG Resource Storage](https://w.atwiki.jp/viprpg_sozai/) contained voiced audio assets.
- [OpenClipart-Vectors](https://pixabay.com/vectors/asian-bottle-chinese-cuisine-food-1294266/)

Code sources:
- `adventure.js` and `index.html` were created for this project by [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.

[Demo](https://joshwidjaja.github.io/D2-AdventurePrototype)