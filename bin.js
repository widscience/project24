class Bin{

    constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.thickness = 10;
    this.angle = 0;

    this.bbin = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic : true});
    
    this.lbin = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness, this.height, {isStatic : true});
    Matter.Body.setAngle(this.lbin, this.angle);

    this.rbin = Bodies.rectangle(this.x + this.width/2, this.y - this.height/2, this.thickness, this.height, {isStatic : true});
    Matter.Body.setAngle(this.rbin, this.angle*(-1));

    World.add(world, this.bbin);
    World.add(world, this.rbin);
    World.add(world, this.lbin);

    }
    
    display(){

        var base = this.bbin.position;
        var right = this.rbin.position;
        var left = this.lbin.position;

        push();
        translate(base.x, base.y);
        rectMode(CENTER);
        stroke("red");
        
        angleMode(RADIANS);
        fill(125);
        
        rect(0, 0, this.width, this.thickness);
        pop();


        push();
        translate(left.x, left.y);
        rectMode(CENTER);
        stroke("red");
        
        angleMode(RADIANS);
        rotate(this.angle);
        fill(125);
        
        rect(0, 0, this.thickness, this.height);
        pop();


        push();
        translate(right.x, right.y);
        rectMode(CENTER);
        stroke("red");
        
        angleMode(RADIANS);
        rotate(this.angle*-1);
        fill(125);
        
        rect(0, 0, this.thickness, this.height);
        pop();
    }

}