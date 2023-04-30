import Navbar from './Navbar'
import Footer from './Footer'
import '../Reset.css'
import '../App.css'
function Produtos() {
    return (
        <div>
        <Navbar/>
        <div className='title'>
            <h1>Flores</h1>
            <p>Trazem mais alegria para o mundo</p>
        </div>
        <div className='Produtos'>
            <div className='row'>
                <div className='produto'>
                    <img src="/public/Flowers/gerbera.jpg" alt="" />
                    <h2>Gerbera</h2>
                    <p>R$ 50,00</p>
                </div>
                <div className='produto'>
                    <img src="/public/Flowers/girassol.jpg" alt="" />
                    <h2>Girassol</h2>
                    <p>R$ 30,00</p>

                </div>
                <div className='produto'>           
                    <img src="/public/Flowers/lavanda.jpg" alt="" />
                    <h2>Lavanda</h2>
                    <p>R$ 20,00</p>
                </div>
                <div className='produto'>
                    <img src="/public/Flowers/lirio.jpg" alt="" />
                    <h2>Lirio</h2>
                    <p>R$ 50,00</p>
                </div>
            </div>
            <div className='row'>
                <div className='produto'>
                    <img src="/public/Flowers/margarida.jpg" alt="" />
                    <h2>Margarida</h2>
                    <p>R$ 40,00</p>
                </div>
                <div className='produto'>
                    <img src="/public/Flowers/orquideas.jpg" alt="" />
                    <h2>Orquideas</h2>
                    <p>R$ 70,00</p>
                </div>
                <div className='produto'>
                    <img src="/public/Flowers/rosas.jpg" alt="" />
                    <h2>Rosas</h2>
                    <p>R$ 40,00</p>
                </div>
                <div className='produto'>
                    <img src="/public/Flowers/tulipas.jpg" alt="" />
                    <h2>Tulipas</h2>
                    <p>R$ 50,00</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Produtos