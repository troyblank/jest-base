// Using cyclical import allows jest to spy on multiple exports
// eslint-disable-next-line import/no-self-import
import * as foos from './foo';

export const foo = () => {
    foos.bar();
};

export const bar = () => 'bar';
