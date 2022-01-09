import float from './index.js';
import test from 'ava';

test('float return type to be number', t => {
	t.is(typeof float(), 'number');
});

test('float with number min 0 return type to be number', t => {
	t.is(typeof float({min: 0}), 'number');
});

test('float with number min 0 and max 10 return type to be number', t => {
	t.is(typeof float({min: 0, max: 10}), 'number');
});

test('float with number min 0 and max 10 less than 11', t => {
	t.true(float({min: 0, max: 10}) < 11);
});

test('float with string to thow error on string', t => {
	const error = t.throws(() => {
		float({min: 'string', max: 'string', fixed: 'string'})
	}, {instanceOf: TypeError});

	t.is(error.message, 'Expected all arguments to be numbers.');
});

test('float with min and max to thow error on min > max', t => {
	const error = t.throws(() => {
		float({min: 10, max: 0})
	}, {instanceOf: TypeError});
  
	t.is(error.message, 'Min cannot be greater than Max.');
});