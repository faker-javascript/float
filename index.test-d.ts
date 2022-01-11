import {expectType} from 'tsd';
import float from './index.js';

expectType<number>(float());
expectType<number>(float({min: 0}));
expectType<number>(float({min: 0, max: 10}));
expectType<number>(float({min: 0, max: 10, fixed: 10}));
