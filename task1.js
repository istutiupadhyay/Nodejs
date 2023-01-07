//console.log("hello world");
//const fs = require('fs');
//fs.writeFileSync('hello.txt','hello world');

//const product = (a,b) => a*b;
//console.log(product(3,4));

/*const student = {
    name: 'john',
    age: 22,
    id: 1001,
    stud() {
        console.log('This is '+ this.name+' age is '+this.age+' id is '+this.id)
    }
};
//student.stud();
const printName = ({name}) => {                   //obj destructutring
  console.log(name);
}
printName(student);  // john

const{name, age} = student;
console.log(name, age);*/   // john 22

/*const arr = ['apple', 'orange', ' ', 'mango', ' ', 'lemon']
const newArr = arr.map(element => {
  if (element === ' ') {
    return 'empty string';
  }
  return element;
});

console.log(newArr);*/ 


/*const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){
console.log('same objects')
}
else{
console.log('different objects')
}*/

/*const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2)*/


/*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
  const { key1, key3}  = { ...obj1}
  console.log(key1, key3)*/

  /*const arr1 = ['value1', 'value2']
  const [ val1, val2 ] = arr1
  console.log(val1)
  console.log(val2)*/

  /*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
  let { key1, key3}  = obj1
  key1 = 20;
  key3 = 123
  console.log(obj1.key1, obj1.key3)*/

/*async function print() {
  console.log('a');
  await  setTimeout(() => {},1000);
  console.log('b');
  await  setTimeout(() => {},1000);
  console.log('c');
  await  setTimeout(() => {},1000);
  console.log('d');
  await  setTimeout(() => {},1000);
  console.log('e');
  await  setTimeout(() => {},1000);
}
print()*/



const path = require('path'); 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const admin = require('./router/admin');
const shop = require('./router/shop');
const contact = require('./router/contactus');
const success = require('./router/success');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', admin);
app.use(shop);
app.use(contact);
app.use(success);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);


