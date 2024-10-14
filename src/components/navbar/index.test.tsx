import { renderNavBar } from ".";

describe('renders NavBar', () => {
    it('navBar has no items', () => {
        const zeroItemNavBar = {};
        expect(renderNavBar(zeroItemNavBar)).toBeFalsy();
    });

    it('navBar has items', () => {
        const populatedNavBar = {
            'item0': {text: 'item0', url: '/item0'},
            'item1': {text: 'item1', url: '/item1'},
            'item2': {text: 'item2', url: '/item2'}
        }
        expect(renderNavBar(populatedNavBar)).toBeTruthy();
    })
})