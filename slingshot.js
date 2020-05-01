class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
    }

    display(){
        if(this.sling.bodyA != null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        stroke ("white");
        line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+20,pointB.y);
        image(this.sling3,pointA.x-20,pointA.y-10,15,30);
        }
        image( this.sling1,150,150);
        image( this.sling2,120,150);
    }
    
}