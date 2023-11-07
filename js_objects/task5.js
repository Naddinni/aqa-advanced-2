const users = [
    {
        firstName: `Chandler`,
        lastName: `Bing`,
        age: 30,
        email: `Chandler.Bing@gmail.com`
    },
    {
        firstName: `Monica`,
        lastName: `Geller`,
        age: 28,
        email: `Monica.Geller@gmail.com`
    },
    {
        firstName: `Ross`,
        lastName: `Geller`,
        age: 31,
        email: `Ross.Geller@gmail.com`
    },
    {
        firstName: `Rachel`,
        lastName: `Greene`,
        age: 28,
        email: `Rachel.Greene@gmail.com`
    }
]

for (const user of users) {
    let {firstName, lastName, age, email} = user
    console.log(`User:`, firstName, lastName, `,`, age, `,`, email)
}


