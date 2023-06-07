let obj ={
  name : "zeyad",
  address: "egypt",
  age:24
}

let handler = {
  get:function(target,prop,proxy){
    if(!(prop in target)){
      throw("this prop is not there")
    }
    if(prop == "name"){
      return target[prop]
      }
    if(prop == "address"){
      return target[prop]
      }
    if(prop == "age"){
      return target[prop]
      }
  },
  set:function(target,prop,value,proxy) {
    if(prop == "name"){
      if(value.length != "7" || typeof value != "string"){
        throw("name value must be string of 7 chars")
      }
      target[prop] = value
    }

    if(prop == "address"){
      if(typeof value != "string"){
        throw("address must be string")
      }
      target[prop] = value
    }
    
    if(prop == "age"){
      if(typeof value != "number" || value <25 || value > 60){
        throw("age must be number between 25 and 60")
      }
      target[prop] = value
    } 
  }
}

let p = new Proxy(obj,handler)


// p.name= 4
// p.age=
console.log(p.age)