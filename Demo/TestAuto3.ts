class Car2 { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    display():void { 
       console.log("Engine is  :   "+this.engine) 
    } 

      //function
      getEngine():string {
         return this.engine;  
      }

 }