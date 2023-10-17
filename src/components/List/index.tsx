import { ProductContext } from "../../contexts/product.context";
import { useContext, useState, PropsWithChildren } from "react";
import { ICardProps } from "../../interfaces";
import { CardsEmpty } from "../CardsEmpty";
import { Container } from "./style";

const List = ({ children }: PropsWithChildren) => {
  const { cards, setFilterCards } = useContext(ProductContext);

  const [activeButton, setActiveButton] = useState<string>("Todos");

  const handleButtonClick = (filterOption: string) => {
    setActiveButton(filterOption);

    if (filterOption === "Todos") {
      setFilterCards([]);
    } else {
      setFilterCards(
        cards.filter((card: ICardProps) => card.option === filterOption)
      );
    }
  };

  const cardsLength = cards.length < 1;

  return (
    <Container>
      <div className="list-container">
        <h2>Resumo financeiro</h2>

        {!cardsLength ? (
          <div className="list-nav">
            <button
              type="button"
              onClick={() => handleButtonClick("Todos")}
              style={{
                backgroundColor:
                  activeButton === "Todos" && !cardsLength
                    ? "var(--color-primary)"
                    : "",
                color:
                  activeButton === "Todos" && !cardsLength
                    ? "var(--color-white)"
                    : "",
                borderColor:
                  activeButton === "Todos" && !cardsLength
                    ? "var(--color-primary)"
                    : "",
              }}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("Entradas")}
              style={{
                backgroundColor:
                  activeButton === "Entradas" && !cardsLength
                    ? "var(--color-primary)"
                    : "",
                color:
                  activeButton === "Entradas" && !cardsLength
                    ? "var(--color-white)"
                    : "",
                borderColor:
                  activeButton === "Entradas" && !cardsLength
                    ? "var(--color-primary)"
                    : "",
              }}
            >
              Entradas
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("Despesas")}
              style={{
                backgroundColor:
                  activeButton === "Despesas" && !cardsLength
                    ? "var(--color-primary)"
                    : "",
                color: activeButton === "Despesas" ? "var(--color-white)" : "",
                borderColor:
                  activeButton === "Despesas" ? "var(--color-primary)" : "",
              }}
            >
              Despesas
            </button>
          </div>
        ) : null}
      </div>

      <div className="list-menu">
        {cards.length > 0 ? <menu>{children}</menu> : <CardsEmpty />}
      </div>
    </Container>
  );
};

export { List };
