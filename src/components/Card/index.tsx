import { ProductContext } from "../../contexts/ProductContext";
import { ICardComponentProps } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";

const Card = ({ card }: ICardComponentProps) => {
  const { removeCard } = useContext(ProductContext);

  return (
    <Container>
      <hr
        style={
          card.option === "Entradas"
            ? { background: "#03B898" }
            : { background: "#E9ECEF" }
        }
      />

      <div className="card-description">
        <div className="card-content">
          <h2>{card.description}</h2>

          <span>{card.option}</span>
        </div>

        <div className="card-actions">
          <span>R$ {card.price.toLocaleString("pt-BR")}</span>

          <button onClick={() => removeCard(card)}>Excluir</button>
        </div>
      </div>
    </Container>
  );
};

export { Card };
