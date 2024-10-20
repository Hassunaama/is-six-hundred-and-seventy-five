# is-six-hundred-and-seventy-five
![NPM Version](https://img.shields.io/npm/v/is-six-hundred-and-seventy-five) ![NPM Downloads](https://img.shields.io/npm/dy/is-six-hundred-and-seventy-five)


A npm package that checks if a number is 675.

```bash
npm i is-six-hundred-and-seventy-five
```

## Examples
```ts
import { isSixHundredAndSeventyFive } from 'is-six-hundred-and-seventy-five';

const number1 = 583;
const number2 = 675;

console.log(isSixHundredAndSeventyFive(number1)); // this logs false
console.log(isSixHundredAndSeventyFive(number2)); // this logs true

if (isSixHundredAndSeventyFive(number2)) {
    console.log("The number is 675!")
}
```

## License
This is licensed under the MIT license. See LICENSE.md.
