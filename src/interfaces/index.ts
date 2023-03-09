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
  removeCard: (card: ICardProps) => void;
}

export interface ICardTotalComponentProps {
  cards: ICardProps[];
}

export interface IListCardComponentProps {
  cards: ICardProps[];
  setFilterCards: any;
  children: React.ReactNode;
}

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

export interface IForm {
  addCard: (newCard: ICardProps) => void;
}
