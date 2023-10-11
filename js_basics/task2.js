import chalk from 'chalk';

const firstSentence = 'Chalk is a soft, white, porous, sedimentary carbonate rock';
const secondSentence = 'It is a form of limestone composed of the mineral calcite and originally formed deep under the sea by the compression of microscopic plankton that had settled to the sea floor.';
const thirdSentence = 'Chalk is common throughout Western Europe, where deposits underlie parts of France, and steep cliffs are often seen where they meet the sea in places such as the Dover cliffs on the Kent coast of the English Channel.';
const thirdStyle = chalk.hex('#DEADED').underline;

console.log(chalk.blue.bgGreen(firstSentence + chalk.red('!')));
console.log(chalk.yellowBright.italic(secondSentence));
console.log(thirdStyle(thirdSentence));



