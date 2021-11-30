const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
];
//find in reduce loop
const rohituser= users.find(x => x.name ==='Rohit');
console.log(rohituser);
const findrohit = users.reduce((p,c) => {if(c.name === 'Rhgj' ) {return c;}
return p; 
},undefined)
console.log(findrohit);
