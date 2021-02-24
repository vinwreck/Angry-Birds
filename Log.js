class Log {
    constructor(x,y,height, angle){
        var option = {
            restitution : 0.2,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x,y,20,height,option); 
        this.w = 20;
        this.h = height; 
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
        
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.w, this.h);
        pop();
    }
}