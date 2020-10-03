const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Nathnael',
        //     age: 26
        // });
        reject('Something went wrong');
    }, 5000);    
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('After');
