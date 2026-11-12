// object methods

const student={
    name:"John",
    age:22,
    hobbies:["Reading","baseball"],
    parents: {
        mother: {
            name:"Anna",
            age: 55
        },
        father:{
            name:"Steave",
            age:56
        }
    
     },
    getInfo:function(){
        console.log(`This is ${this.name} and he is ${this. parents.father.name}'s son`);

    }
}
console.log(student.parents.mother.name);

student.getInfo()
