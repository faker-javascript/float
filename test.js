import fakeFloat from './index.js';
import test from 'ava';

test('fakeFloat return type to be number', t => {
	t.is(typeof fakeFloat(), 'number');
});

test('fakeFloat with number min 0 return type to be number', t => {
	t.is(typeof fakeFloat(0), 'number');
});

test('fakeFloat with number min 0 and max 10 return type to be number', t => {
	t.is(typeof fakeFloat(0, 10), 'number');
});

test('fakeFloat with number min 0 and max 10 less than 11', t => {
	t.true(fakeFloat(0, 10) < 11);
});

test('fakeFloat with string to thow error on string', t => {
	const error = t.throws(() => {
		fakeFloat('string', 'string', 'string')
	}, {instanceOf: TypeError});

	t.is(error.message, 'Expected all arguments to be numbers.');
});

test('fakeFloat with min and max to thow error on min > max', t => {
	const error = t.throws(() => {
		fakeFloat(10, 0)
	}, {instanceOf: TypeError});
  
	t.is(error.message, 'Min cannot be greater than Max.');
});