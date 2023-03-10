import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ICardProps {
  description: string;
  price: number;
  option: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  size: "small" | "medium";
  color: "pink" | "gray";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface IButtonLinkStyledProps {
  size: "small" | "medium";
  color: "pink" | "gray";
}

export interface ICardComponentProps {
  card: ICardProps;
}

export interface ICardTotalComponentProps {
  cards: ICardProps[];
}

export interface IListCardComponentProps {
  children: React.ReactNode;
}

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

export interface IProductContextData {
  cards: any;
  filterCards: any;
  addCard: (newCard: ICardProps) => void;
  removeCard: (card: ICardProps) => void;
  setFilterCards: any;
}
