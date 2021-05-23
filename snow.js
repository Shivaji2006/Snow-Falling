class Snow{
    constructor(x,y,radius){
        var options = {
            friction: 0,
            restitution:0.1,
            density: 0
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.body.image("snowImg");
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,radius);
        pop();

    }
}