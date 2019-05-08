# textmutant
Node package that mutates text.

## Install:
`$ npm install textmutant`

## Example:

```js
const mutant = require('textmutant');

let text = 'Hello, how are you.';

console.log('Upper:', mutant.upper(text)); // Upper: HELLO, HOW ARE YOU.

console.log('Flip:', mutant.flip(text)); // Flip: ˙noʎ ǝɹɐ ʍoɥ 'ollǝH

console.log('Reverse:', mutant.reverse(text)); // Reverse: .uoy era woh ,olleH

console.log('Teen:', mutant.teen(text)); // Teen: HELlo, hOw are yOU.

let bin = mutant.toBinary(text);
console.log('Text to binary:', bin); // Text to binary: [binary stuff]
console.log('Binary to text:', mutant.fromBinary(bin)); // Binary to text: Hello, how are you.
```