'use strict';

var _ = require('.');

test('replace blacklisted words with asterisks', function () {
    return expect((0, _.sensitiveWords)('The name of the NX will be Nintedo Switch', ['switch'])).toBe('The name of the NX will be Nintedo ***');
});

test('replaces multiple instances of blacklisted words', function () {
    return expect((0, _.sensitiveWords)('The name of the NX will be Nintedo Switch. The Switch will be awsome.', ['switch'])).toBe('The name of the NX will be Nintedo ***. The *** will be awsome.');
});