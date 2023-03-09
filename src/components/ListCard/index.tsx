import { ICardProps, IListCardComponentProps } from "../../interfaces";
import { List, ListHeader, ListBody } from "./style";
import cardsVoids from "../../assets/NoCard.svg";
import { ButtonLink } from "../ButtonLink";

const ListCard = ({
  cards,
  setFilterCards,
  children,
}: IListCardComponentProps) => {
  return (
    <List>
      <ListHeader>
        <h2>Resumo financeiro</h2>

        <nav>
          <ButtonLink
            size="small"
            color="gray"
            onClick={() => setFilterCards([])}
          >
            Todos
          </ButtonLink>
          <ButtonLink
            size="small"
            color="gray"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Entradas")
              )
            }
          >
            Entradas
          </ButtonLink>
          <ButtonLink
            size="small"
            color="gray"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Despesas")
              )
            }
          >
            Despesas
          </ButtonLink>
        </nav>
      </ListHeader>

      <ListBody>
        {cards.length > 0 ? (
          <menu>{children}</menu>
        ) : (
          <>
            <h2>Você ainda não tem nenhum lançamento.</h2>

            <img src={cardsVoids} alt="cartões vazios" />
          </>
        )}
      </ListBody>
    </List>
  );
};

export { ListCard };
