class Paper {
   constructor(x, y) { 
     var options = { 
       isStatic:false, 
      'restitution':0.3, 
      'friction':0.5,
       'density':1.2 
      } 
      this.image=loadImage("Paper.png");
      this.radius=60; 
      this.body=Bodies.circle(x,y,this.radius,options); 
      World.add(world,this.body);
     } 
     display(){ 
      var pos =this.body.position; 
        push();
         translate(pos.x,pos.y);
          fill("Green");
          
           imageMode(CENTER);
      image(this.image,0,0,20,20);
            pop(); 
          } 
        };
