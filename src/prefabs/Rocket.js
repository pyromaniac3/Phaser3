// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y, texture, frame){
        super(scene, x,y,tecture,frame);

        // add object to exisiting scene
        scene.add.exisiting(this);
    }
}