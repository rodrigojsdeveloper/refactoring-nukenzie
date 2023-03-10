import { ProductContext } from "../../contexts/ProductContext";
import { CardTotal } from "../../components/CardTotal";
import { ListCard } from "../../components/ListCard";
import { Header } from "../../components/Header";
import { ICardProps } from "../../interfaces";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Container, Content } from "./style";
import { useContext } from "react";

const Dashboard = () => {
  const { cards, filterCards } = useContext(ProductContext);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form />
          {cards.length > 0 && (
            <CardTotal cards={filterCards.length > 0 ? filterCards : cards} />
          )}
        </Content>

        <ListCard
          children={
            filterCards.length > 0
              ? filterCards.map((card: ICardProps, i: number) => (
                  <Card key={i} card={card} />
                ))
              : cards.map((card: ICardProps, i: number) => (
                  <Card key={i} card={card} />
                ))
          }
        />
      </Container>
    </>
  );
};

export { Dashboard };
