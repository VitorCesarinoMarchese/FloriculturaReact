import rose from "/rose.svg"

function Navbar(){
    return (
        <>
            <nav className="navbar">
                <a href="/"><img src={rose} id="rose" alt="rosemarry"/></a>
                <a href="/produtos">Produtos</a>
            </nav>
        </>
    )
}

export default Navbar