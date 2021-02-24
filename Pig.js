class Pig {
    constructor(x,y){
        var option = {
            restitution : 0.2,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50, option); 
        this.w = 50;
        this.h = 50; 
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.w, this.h);
        pop();
    }
}