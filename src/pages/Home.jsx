import banner from "/banner.jpg"
import teste from "/HomeBanner.jpg"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../Reset.css'
import '../App.css'
function Home(){
    return(
        <div>
            <Navbar/>
            <img src={banner} className="banner"/>
            <div className="sobre">
            <h1>Quem somos</h1>
            <p>As flores têm o poder de transformar o nosso humor, o nosso ambiente e as nossas relações. Elas são símbolos de amor, de carinho, de gratidão e de esperança. Por isso, nós somos uma floricultura online que quer levar essas emoções para você e para quem você ama. </p>
            </div>
            <div className="HomeProdutos">
            <h1>Nossos Produtos</h1>
            <div className="row-center">
                <img src={teste} id="img1"/>
                <img src={teste} id="img2"/>
            </div>
            </div>
        <Footer/>
    </div>
  )
}
export default Home