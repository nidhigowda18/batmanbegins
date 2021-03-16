class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    this.image=loadImage("walking frame/walking_1.png");
    World.add(world, this.body);
    this.umbrella=Bodies.circle(x,y,30,options);
    this.radius=30;
    World.add(world,this.umbrella)
    }
    display()
    {
        var pos=this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+50,300,300);

    }
}