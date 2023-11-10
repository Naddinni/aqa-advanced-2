async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
}

async function promises() {
    const promiseAllResult = await Promise.all([fetchTodo(), fetchUser()]);
    const promiseRaceResult = await Promise.race([fetchTodo(), fetchUser()]);

    console.log('Promise.all:', promiseAllResult);
    console.log('Promise.race:', promiseRaceResult)
}

promises()


