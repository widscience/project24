class Paper{

    constructor(x, y) {

        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.radius = 20;
        this.body = Bodies.circle(x, y, this.radius, options);

        World.add(world, this.body);
    } 

    display(){

        var paper = this.body.position;

        push();
        translate(paper.x, paper.y);
        stroke("white");
        fill("red");
        ellipse(0,0, this.radius);
        pop();

    } 

}    
