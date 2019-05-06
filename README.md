# textmutant
Node package that mutates text.

## Install:
`$ npm install textmutant`

## Examples:

### Basic example

```js
const mutant = require('textmutant');

let text = 'Hello, how are you.';

console.log('Flip:', mutant.flip(text));

console.log('Reverse:', mutant.reverse(text));

console.log('Teen:', mutant.teen(text));

var bin = mutant.toBinary(text);
console.log('Text to binary:', bin);
console.log('Binary to text:', mutant.fromBinary(bin));
```