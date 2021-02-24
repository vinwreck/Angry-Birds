class Bird {
    constructor(x,y){
        var option = {
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,50,50, option); 
        this.w = 50;
        this.h = 50; 
        World.add(world, this.body);
    }
    display() {
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.w, this.h);
        pop();
    }
}