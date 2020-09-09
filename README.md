For Hiding sensitive-words

<div align="center">
  <a href="https://npmjs.org/package/sensitive-word">
    <img src="https://badgen.now.sh/npm/v/sensitive-word" alt="version" />
  </a>
  <a href="https://npmjs.org/package/sensitive-word">
    <img src="https://badgen.now.sh/npm/dm/sensitive-word" alt="downloads" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=sensitive-word">
    <img src="https://packagephobia.now.sh/badge?p=sensitive-word" alt="install size" />
  </a>
</div>

# Example 

```shell
$ npm install sensitive-words --save

```

```javascript
const {sensitiveWords} = require('sensitive-words')
// ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const filtered = sensitiveWords(
    'The new apple makbook pro will have a touchbar',
    ['pro','touchbar']
)
console.log(filtered)
// The new apple makbook *** will have a ***
```
