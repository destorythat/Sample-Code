
   let user={
  name:'john',
  age:20,
  occupation:'teacher',


   }


   let properties = Object.entries(user);
//    console.log(properties.length);

   for( let prop of properties){
   
    console.log(prop)

   }

   let keys =Object.keys(user);
//    console.log(value);
   for(let key of keys){

    console.log(key)

   }

   let value =Object.values(user);
   
   for(let val of value){

    console.log(val)


   }