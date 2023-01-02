import { FieldValues, UseFormRegister } from "react-hook-form";
import { MouseEventHandler } from "react";

export interface ICardProps {
  description: string;
  price: number;
  option: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  disabled?: boolean | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  size: "l" | "m" | "s";
  color: "home" | "dashboard";
}

export interface IButtonStyledProps {
  size: string;
  color: string;
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
  sizeInput: "m" | "s";
  type?: string;
  name: string;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  label?: string;
  error?: any;
  required: boolean | undefined;
}

export interface InputStyledProps {
  sizeInput: string;
}
