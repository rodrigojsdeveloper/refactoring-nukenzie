import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  size: "100px" | "314px";
  color: "pink" | "gray";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface IButtonStyle {
  size: "100px" | "314px";
  color: "pink" | "gray";
}

export interface ICardProps {
  description: string;
  price: number;
  option: string;
}

export interface ICard {
  card: ICardProps;
}

export interface ICardArray {
  cards: Array<ICardProps>;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IProductContextData {
  cards: any;
  filterCards: any;
  addCard: (newCard: ICardProps) => void;
  removeCard: (card: ICardProps) => void;
  setFilterCards: any;
}
