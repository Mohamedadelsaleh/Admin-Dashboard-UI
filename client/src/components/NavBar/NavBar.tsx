import './style.scss'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/RPC-JP_Logo.png" alt="logo" width="40" height="40" />
                <span>NexSphere Dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" className="icon" />
                <img src="/app.svg" className="icon" />
                <img src="/expand.svg" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="icon" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/mohamed.jpg" alt="icon" />
                    <span>Mohamed</span>
                </div>
                <img src="/settings.svg" className="icon" />
            </div>
        </div>
    )
}

export default NavBar;