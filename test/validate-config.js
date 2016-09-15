var eslint = require('eslint');
var test = require('tape');
var path = require('path');

test('load config in eslint to validate all rule syntax is correct', function (t) {
    var CLIEngine = eslint.CLIEngine;

    var cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'eslintrc.json'
    });

    var code = 'var foo = 1;\nvar bar = function () {};\nbar(foo);\n';

    t.ok(cli.executeOnText(code).errorCount === 0);
    t.end();
});

var linter = new eslint.CLIEngine({
    configFile: path.join(__dirname, '..', 'eslintrc.json')
});

test('api: lintText', function (t) {
    t.plan(1);
    var result = linter.executeOnText("console.log('hi there')\n\n");
    t.equals(result.results[0].messages[0].message, 'Missing semicolon.');
});
