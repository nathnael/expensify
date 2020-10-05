import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:50914269567:web:ed4b218943bdb0ec09e24a",
    measurementId: "G-M45RV54YG5"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with fetching data', e);
// });

// database.ref('expenses').push({
//     description: 'Shoes',
//     note: 'The best shoes',
//     amount: 2500,
//     createdAt: 1
// });

// database.ref('notes/-MIf1mSSq_H_29JO7S6B').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         dfbadfbsdfb: {
//             title: 'First note!',
//             body: 'This is my note'
//         }, 
//         bdfbdfbsdf: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes =[{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'  
// }];

// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val().name + ' is a ' + snapshot.val().job.title + ' at ' + snapshot.val().job.company + '.');
//     setTimeout(() => {
//         database.ref('name').set('Nana');
//     }, 10500);
// }, (e) => {
//     console.log('Error with fetching data', e);
// });



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e)  => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log('Error fetching data.', e);
//     })

// Sample request to the database to check if the connection is working
// database.ref().set({
//     name: 'Nathnael Getahun',
//     age: 31, 
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Addis Ababa',
//         country: 'Ethiopia'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated!');
// }).catch((e) => {
//     console.log('Update failed.', e);
// });

// database.ref('isSingle').remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });