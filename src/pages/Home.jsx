import bigbanner from "../assets/img/banner.jpg";
import smallbanner from "../assets/img/smallbanner.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <img src={bigbanner} className="banner" alt="Banner"/>
      <div className="center">
        <div className="sobre">
          <h1>Quem somos</h1>
          <p>
            As flores têm o poder de transformar o nosso humor, o nosso ambiente
            e as nossas relações. Elas são símbolos de amor, de carinho, de
            gratidão e de esperança. Por isso, nós somos uma floricultura online
            que quer levar essas emoções para você e para quem você ama.
          </p>
        </div>
      </div>
      <div className="HomeProdutos">
        <h2>Nossos Produtos</h2>
          <img src={smallbanner} alt="Flor"/>
          <img className="ml-img" src={smallbanner} alt="Flor"/>
      </div>
      <Footer />
    </>
  );
}
export default Home;
