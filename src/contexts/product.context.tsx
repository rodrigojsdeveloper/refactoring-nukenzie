import { ICardProps, IProductContextData } from "../interfaces";
import { createContext, PropsWithChildren } from "react";
import { useLocalStorage } from "../Hook";

const ProductContext = createContext({} as IProductContextData);

const ProductContextProvider = ({ children }: PropsWithChildren) => {
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

  const productContextData: IProductContextData = {
    addCard,
    cards,
    filterCards,
    removeCard,
    setFilterCards,
  };

  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
