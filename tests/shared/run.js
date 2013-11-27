#!/usr/local/bin/node

var testrunner = require('qunit');
var log = {
	// log assertions overview
	assertions: false,

	// log expected and actual values for failed tests
	errors: true,

	// log tests overview
	tests: false,

	// log summary
	summary: false,

	// log global summary (all files)
	globalSummary: true,

	// log currently testing code file
	testing: false
};

testrunner.run({
	deps: {path: 'multi/shared/errors', namespace: 'errors'},
	code: 'multi/shared/errors.js',
	tests: 'tests/shared/errors.js',
	log: log
}, null);