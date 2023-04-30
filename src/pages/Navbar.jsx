import rose from "/rose.svg"
import profile from "/profile.svg"

function Navbar(){
    return (
        <div>
            <nav className="navbar">
                <a href="/"><img src={rose} id="rose"/></a>
                <a href="/produtos">Produtos</a>
                <a href="/login" id="profile"><img src={profile}/></a>
            </nav>
        </div>
    )
}

export default Navbar