import '../../output.css';

export default function renderNavBar() {
    return (
        <nav className='bg-opacity-20 bg-purple me-auto'>
            <a href='/' className='text-gray-light rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Home</a>
            <a href='https://www.github.com/doanah2000' className='text-gray-light rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>GitHub</a>
        </nav>
    )
}