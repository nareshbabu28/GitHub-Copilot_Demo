class Car2 { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 

    //function
    start():void {
        console.log("Car engine started")
    }

      //function
      stop():void {
         console.log("Car engine stopped")   
      }

      //function
      accelerate():void {
         console.log("Car is accelerating")   
      }
 }