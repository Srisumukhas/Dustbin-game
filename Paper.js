class Paper{
    constructor(x,y,r){
        options={
            isstatic: False,
            restitution:8.3,
            friction:0,
            density:1.2
         }
         paper=Bodies.circle(200,100,20,options)

    }
     keyPressed(){
         if(keyCode===UP_ARROW){
             Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:130,y:-145})
         }
     }
}
