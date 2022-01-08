export default function fakeFloat(min, max, fixed) {
    fixed = Math.pow(10, ((fixed === undefined) ? 4 : fixed));
    if (max === undefined) {
        max = Number.MAX_SAFE_INTEGER / fixed;
    }
    if (min === undefined) {
        min = Number.MIN_SAFE_INTEGER / fixed;
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
		throw new TypeError('Expected all arguments to be numbers.');
	}
    if (min > max) {
		throw new TypeError('Min cannot be greater than Max.');
	}
    let result = Math.random() * (max - min) + min;
    return Number(Number(parseFloat(result.toString())).toFixed(4));
};