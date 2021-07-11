const people=require('./people');
const _=require('lodash');
const path=require('path');
const mypath='/index.js';
const fs=require('fs');
fs.writeFileSync('myfile.text','hello dada');



//console.log(path.parse(mypath));

console.log(_.last(people));
//console.log(people.test());
