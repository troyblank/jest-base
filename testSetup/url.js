Object.defineProperty(window, 'location', {
    writable: true,
    value: {
        assign: jest.fn(),
        href: 'https://jestjs.io/'
    }
});
