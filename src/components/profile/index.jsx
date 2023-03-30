import reactLogo from '../../assets/react.svg'

function Profile() {
    return (
        <section id='profileSection'>
            <div className="container">
                <div className="profile">
                    <img id='imgProfile' src={reactLogo} alt="" />
                    <div id='contentProfile'>
                        <h4>Desenvolvedor Back-end</h4>
                        <p>Sou dev back-end. programando!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;