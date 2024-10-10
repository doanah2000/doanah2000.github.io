import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InnerHTML from 'dangerously-set-html-content';
import { NavBarProps } from './types';

export default function renderNavBar(navBarProps: NavBarProps) {
    var renderedHTML = '';
    navBarProps.navBarLinks.forEach(function (navBarItem) {
        renderedHTML += `<a href=${navBarItem.link}>${navBarItem.text}</a>\n`
    });
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <InnerHTML html={renderedHTML}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export * from './types';