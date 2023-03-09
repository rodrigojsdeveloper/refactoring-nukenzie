import { useLocalStorage } from "../../components/Hook";
import { CardTotal } from "../../components/CardTotal";
import { ListCard } from "../../components/ListCard";
import { Header } from "../../components/Header";
import { ICardProps } from "../../interfaces";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Container, Content } from "./style";

const Dashboard = () => {
  const [cards, setCards] = useLocalStorage("Nu Kenzie: cards", []);

  const [filterCards, setFilterCards] = useLocalStorage(
    "Nu Kenzie: filter",
    []
  );

  const addCard = (newCard: ICardProps) => {
    const copyNewCard = { ...newCard };

    if (newCard.option === "Despesas") {
      +copyNewCard.price;

      copyNewCard.price = -copyNewCard.price;
    }

    setCards([...cards, copyNewCard]);
  };

  const removeCard = (card: ICardProps) => {
    setCards(cards.filter((x: ICardProps) => x !== card));

    setFilterCards(filterCards.filter((x: ICardProps) => x !== card));
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form addCard={addCard} />
          {cards.length > 0 && (
            <CardTotal cards={filterCards.length > 0 ? filterCards : cards} />
          )}
        </Content>

        <ListCard
          cards={cards}
          setFilterCards={setFilterCards}
          children={
            filterCards.length > 0
              ? filterCards.map((card: ICardProps, i: number) => (
                  <Card key={i} card={card} removeCard={removeCard} />
                ))
              : cards.map((card: ICardProps, i: number) => (
                  <Card key={i} card={card} removeCard={removeCard} />
                ))
          }
        />
      </Container>
    </>
  );
};

export { Dashboard };
