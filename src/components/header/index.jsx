import reactLogo from '../../assets/react.svg'

function Header({ scrollStatus }) {
    return (
        <header className={scrollStatus ? 'headerActive' : ''}>
            <div className="container">
                <div className="header">
                    <img src={reactLogo} alt="" />
                    <div>
                        <ul className="navbar">
                            <li>
                                <a href="#profileSection">Sobre mim</a>
                            </li>
                            <li>
                                <a href='#projectsSection'>Projetos</a>
                            </li>
                            <li>
                                <a href="">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;