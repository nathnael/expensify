// const person = {
//     name: 'Nathnael',
//     age: 31,
//     location: {
//         city: 'Addis Ababa',
//         temp: 100
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New york'] = address;

console.log(`You are in ${city} ${state}`);
