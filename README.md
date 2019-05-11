# textmutant
Node package to mutate text into various other forms.

## Install:
`$ npm install textmutant`

## Examples:

```js
const mutant = require('textmutant');

let text = 'Hello, how are you.';

console.log('Upper:', mutant.upper(text)); // Upper: HELLO, HOW ARE YOU.

console.log('Flip:', mutant.flip(text)); // Flip: ˙noʎ ǝɹɐ ʍoɥ 'ollǝH

console.log('Reverse:', mutant.reverse(text)); // Reverse: .uoy era woh ,olleH

console.log('Random:', mutant.random(text)); // Random: ˙oaleol,yw hu ro .He

console.log('Teen:', mutant.teen(text)); // Teen: HELlo, hOw are yOU.

console.log('Color to hex:', mutant.colortohex('hotpink')); // Color to hex: #ff69b4

var bin = mutant.toBinary(text);
console.log('Text to binary:', bin); // Text to binary: [binary stuff]
console.log('Binary to text:', mutant.fromBinary(bin)); // Binary to text: Hello, how are you.
```

### Socket.io example
Mutate incoming text using short cuts (ie: `/reverse text to reverse`).

```js
const mutant = require('textmutant');

// input example: /reverse Hello, how are you 
// output: .uoy era woh ,olleH
if (msg.charAt(0) == '/') {
    let func = msg.match(/^\/([a-zA-Z0-9]+)\s+/);
    if (func.length >= 1) {
        func = func[1]; 
    	if (func.length && typeof mutant[func] === 'function') { 
        	data.msg = mutant[func](msg.replace('/'+func+' ', ''));
    	}
    }
}
```
