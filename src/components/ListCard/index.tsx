import { ICardProps, IListCardComponentProps } from "../../interfaces";
import { List, ListHeader, ListBody } from "./style";
import cardsVoids from "../../assets/NoCard.svg";
import { Button } from "../Button";

const ListCard = ({
  cards,
  setFilterCards,
  children,
}: IListCardComponentProps) => {
  return (
    <List>
      <ListHeader>
        <h2>Financial Summary</h2>

        <nav>
          <Button size="s" color="dashboard" onClick={() => setFilterCards([])}>
            All
          </Button>
          <Button
            size="s"
            color="dashboard"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Entry")
              )
            }
          >
            Entry
          </Button>
          <Button
            size="s"
            color="dashboard"
            onClick={() =>
              setFilterCards(
                cards.filter((card: ICardProps) => card.option === "Expenses")
              )
            }
          >
            Expenses
          </Button>
        </nav>
      </ListHeader>

      <ListBody>
        {cards.length > 0 ? (
          <menu>{children}</menu>
        ) : (
          <>
            <h2>You don't have any releases yet.</h2>

            <img src={cardsVoids} alt="Cards voids" />
          </>
        )}
      </ListBody>
    </List>
  );
};

export { ListCard };
