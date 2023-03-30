import reactLogo from '../../assets/react.svg'
import brasilIcon from '../../../public/assets/icons/iconBrasil96.png'
import euaIcon from '../../../public/assets/icons/iconEua96.png'

function Header({ scrollStatus, language }) {
    return (
        <header className={scrollStatus ? 'headerActive' : ''}>
            <div className="container">
                <div className="header">
                    <img src={reactLogo} alt="" />
                    <div className='nav'>
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
                        <ul className='languageList'>
                            <li>
                                <a href="">
                                    <img id='iconLanguage' className={language == 'pt-br' ? 'active' : ''} src={brasilIcon} alt="brasilIcon" />
                                    {/* <span>pt-BR</span> */}
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img id='iconLanguage' className={language == 'en-us' ? "active" : ""} src={euaIcon} alt="euaIcon" />
                                    {/* <span>en-US</span> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;