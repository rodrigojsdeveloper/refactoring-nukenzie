import { Container, Content } from "./style";
import { useLocalStorage } from "../../components/Hook";
import { CardTotal } from "../../components/CardTotal";
import { ListCard } from "../../components/ListCard";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ICardProps } from "../../interfaces";
import { Card } from "../../components/Card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Header } from "../../components/Header";

const Dashboard = () => {

  const [cards, setCards] = useLocalStorage("Nu Kenzie: cards", []);

  const [filterCards, setFilterCards] = useLocalStorage(
    "Nu Kenzie: filter",
    []
  );

  const [option, setOption] = useState<string>("Entry");

  const addCard = (newCard: ICardProps) => {
    const copyNewCard = { ...newCard };

    if (newCard.option === "Expenses") {
      +copyNewCard.price;

      copyNewCard.price = -copyNewCard.price;
    }

    setCards([...cards, copyNewCard]);
  };

  const removeCard = (card: ICardProps) => {
    setCards(cards.filter((x: ICardProps) => x !== card));

    setFilterCards(filterCards.filter((x: ICardProps) => x !== card));
  };

  const { register, handleSubmit } = useForm();

  const onSubmitFunc = (data: any) => {
    const { description, price } = data;

    const newData = { description, price, option };

    addCard(newData);
  };

  return (
    <>
      <Header />

      <Container>
        <div className="divForm">
          <Content onSubmit={handleSubmit(onSubmitFunc)}>
            <div>
              <Input
                sizeInput="m"
                type="text"
                name="description"
                autoComplete="off"
                placeholder="Enter your description here"
                register={register}
                label="Description"
                required={true}
              />

              <span>Ex: Buying clothes</span>
            </div>

            <section>
              <Input
                sizeInput="s"
                type="number"
                name="price"
                autoComplete="off"
                placeholder="US$"
                register={register}
                label="Value"
                required={true}
              />

              <div>
                <label>Type of value</label>

                <select
                  name="options"
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option>Entry</option>
                  <option>Expenses</option>
                </select>
              </div>
            </section>

            <Button type="submit" size="l" color="home">
              Insert value
            </Button>
          </Content>

          {cards.length > 0 && (
            <CardTotal cards={filterCards.length > 0 ? filterCards : cards} />
          )}
        </div>

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
