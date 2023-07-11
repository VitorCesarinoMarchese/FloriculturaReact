import { useLocation } from "react-router-dom";
import Quantidade from "../components/Quantide";
import Cores from "../components/Cores";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Flor() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Navbar />
      <div className="FlorTitle">
        <h1>{location.state.nome}</h1>
        <p>
          A gérbera simboliza a pureza e inocência das crianças, e também a
          beleza da vida e energia positiva da natureza
        </p>
      </div>
      <div className="Flor">
        <div className="FlorId">
          <img src={location.state.foto} alt={location.state.nome} />
          <h2>Preço Medio</h2>
          <p>{location.state.preco}</p>
        </div>
        <div>
          <Cores />
          <Quantidade />
          <div>
            <h3>Cuidados</h3>
            <p>
              As gérberas precisam de rega regular, mas 1 vez por semana pode
              ser o suficiente em locais mais úmidos
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Flor;
