class Bob{
    constructor(x, y, radius){
        var properties = {
            
            isStatic: false,
            friction:1,
            density:1,
            restitution: 1
        }

        this.body = Bodies.circle(x, y, radius, properties);
        this.diameter = radius*2;
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }

    display(){
        
        var position = this.body.position;
        fill("white");
        noStroke();
        ellipse(position.x, position.y, this.diameter, this.diameter); 
    }
}
