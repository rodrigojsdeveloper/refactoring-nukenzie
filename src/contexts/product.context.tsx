import { ICardProps, IProductContextData, IChildren } from "../interfaces";
import { useLocalStorage } from "../components/Hook";
import { createContext } from "react";

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({ children }: IChildren) => {
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
    <ProductContext.Provider
      value={{
        addCard,
        cards,
        filterCards,
        removeCard,
        setFilterCards,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
