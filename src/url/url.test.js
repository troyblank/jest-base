
import Chance from 'chance';
import { goToURL } from './url';

const chance = new Chance();

test('should be able to spy on assign', () => {
    const url = chance.word();

    goToURL(url);

    expect(window.location.assign).toBeCalledWith(url);
});
