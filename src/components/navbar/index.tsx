import '../../output.css';
import { NavBarItemInfo } from './types';

export function renderNavBar(navBarItems: Record<string, NavBarItemInfo>) {
    return Object.keys(navBarItems).length !== 0 ? (
        <nav className='bg-opacity-20 bg-purple me-auto' dangerouslySetInnerHTML={loopNavBar(navBarItems)}/>
    ) : "";
}

function loopNavBar(navBarItems: Record<string, NavBarItemInfo>) {
    var navBarItemHtml = '';
    for (const key in navBarItems) {
        navBarItemHtml += `<a href='${navBarItems[key].url}' class='text-gray-light rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>${navBarItems[key].text}</a>\n`;
    }
    return {__html: navBarItemHtml};
}

export * from './types'