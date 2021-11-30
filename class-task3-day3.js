const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
];

// { // "00-09": [], // "10-19": [], // "20-29": [], // "30-39": [] // }

// Group By + sorting with name

// reduce O(N) // sort O(N) // O(n**2)

// O(N)

const sortuser= (users.sort((a,b)=> a.name.localeCompare(b.name)));
const groupByGender = sortuser.reduce((p, c,index) => {
    const x = Math.floor(c.age/10);
    const key = `${x}0-${x}9`;
    (p[key] = p[key] || []).push(c);
    return p;
}, {})

console.log(groupByGender)