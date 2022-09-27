const{name, campus} = require('./information');
const{say} = require("cowsay");

console.log(say({
    e: "oO",
    T: "U",
    text: `Hello I'm ${name} from ${campus} Campus!`,
}));