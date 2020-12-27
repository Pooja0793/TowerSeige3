class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visiblity=255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed <3){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      push();

      this.visiblity=this.visiblity-5;
      pop();
     ;
    }
  }
  score(){
    if(this.visiblity<0 && this.visiblity>-150){
      score++;

    }
  }
};
