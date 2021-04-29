class Iron {
    constructor(x, y,angle) {
      var options = {
          'friction':1,
          'restitution':0.3,
          'density':3
      }
      this.body = Bodies.rectangle(x, y,70,40,options);
      this.width = 70;
      this.height = 40;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);

      rotate(angle);

      rectMode(CENTER);
      fill(170,85,70);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }