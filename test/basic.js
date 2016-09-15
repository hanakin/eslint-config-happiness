var config = require('../');
var test = require('tape');

function isObject (obj) {
    return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', function (t) {
    t.ok(isObject(config.rules));
    t.end();
});
