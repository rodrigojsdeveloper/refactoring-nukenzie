import { ICardProps, IListCardComponentProps } from "../../interfaces";
import cardsVoids from "../../assets/NoCard.svg";
import { Container } from "./style";

const ListCard = ({
  cards,
  setFilterCards,
  children,
}: IListCardComponentProps) => {
  return (
    <Container>
      <div>
        <h2>Resumo financeiro</h2>

        <div>
          <button type="button" onClick={() => setFilterCards([])}>
            Todos
          </button>
          <button
            type="button"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Entradas")
              )
            }
          >
            Entradas
          </button>
          <button
            type="button"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Despesas")
              )
            }
          >
            Despesas
          </button>
        </div>
      </div>

      <div>
        {cards.length > 0 ? (
          <menu>{children}</menu>
        ) : (
          <>
            <h2>Você ainda não tem nenhum lançamento.</h2>

            <img src={cardsVoids} alt="cartões vazios" />
          </>
        )}
      </div>
    </Container>
  );
};

export { ListCard };
