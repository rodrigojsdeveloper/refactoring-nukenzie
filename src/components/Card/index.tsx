import { ICardComponentProps } from "../../interfaces";
import { Container } from "./style";

const Card = ({ card, removeCard }: ICardComponentProps) => {
  return (
    <Container>
      <hr
        style={
          card.option === "Entradas"
            ? { background: "#03B898" }
            : { background: "#E9ECEF" }
        }
      />

      <div>
        <div>
          <h2>{card.description}</h2>

          <span>{card.option}</span>
        </div>

        <div>
          <span>R$ {card.price}</span>

          <button onClick={() => removeCard(card)}></button>
        </div>
      </div>
    </Container>
  );
};

export { Card };
