const {sensitiveWords} = require('sensitive-word')

const filtered = sensitiveWords(
    'The new apple makbook pro will have a touchbar',
    ['pro','touchbar']
)
console.log(filtered)