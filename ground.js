class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        push();
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.x,this.body.y,this.body.width,this.body.height);
        pop();
    }
}