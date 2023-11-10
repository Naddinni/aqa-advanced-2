function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());
}

let promiseAllResult
Promise.all([fetchTodo(), fetchUser()])
    .then(result => promiseAllResult = result)
    .then(() => console.log('Promise.all:', promiseAllResult));

let promiseRaceResult
Promise.race([fetchTodo(), fetchUser()])
    .then(result => promiseRaceResult = result)
    .then(() => console.log('Promise.race:', promiseRaceResult));

