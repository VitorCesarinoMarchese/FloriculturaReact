import Flowers from "./flores.json";
import { useNavigate } from "react-router-dom";
function Lista() {
  const navigate = useNavigate()
  return (
      <div className="lista">
        {Flowers.map(({ nome, preco, foto }) => (
            <div className="produto" key={nome} onClick={()=>{navigate(`/flor`, {state: {nome: nome, foto: foto, preco: preco}})}}>
                    <img src={foto} alt={nome} />
                    <h2>{nome}</h2>
                    <p>{preco}</p>
            </div>
        ))}
      </div>
  );
}
export default Lista;
