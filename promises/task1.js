const text = 'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals.'
const milliseconds = 6_000
function printWithDelay (text, milliseconds) {
   return new Promise( (resolve) => setTimeout(() => resolve(text), milliseconds))
}

printWithDelay(text,milliseconds)
    .then((text) => console.log(text));



