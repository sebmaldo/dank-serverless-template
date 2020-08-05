import test from 'ava';
import { example } from '../../src/example/handler';

test('Testing the example', async t => {
    const output = await example({example: 'input'});
    t.is(output.statusCode, 200);
});