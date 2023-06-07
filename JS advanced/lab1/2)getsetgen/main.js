  var TheObj ={

    getSetGen : function(){
    var myProps= Object.keys(this);
    var thisRef = this;
    myProps.forEach(function(prop){
      if(typeof thisRef[prop] !== "function"){
        var theValue = thisRef[prop];
        Object.defineProperty(thisRef, prop , {
          enumerable: true,
          get:function(){
            return theValue;
          },
          set:function(value){
            theValue= value;
          }
        })
        
      }

    });
  }
}

//////////test////////////
var newObj = {};

newObj.name = "zeyad"
newObj.age = 24
newObj.email = "zeyadbelal00@gmail.com"


TheObj.getSetGen.call(newObj)


console.log(newObj.name); 
console.log(newObj.age); 
console.log(newObj.email); 


console.log(newObj); 

