import { ProductContextProvider } from "./ProductContext";
import { IListCardComponentProps } from "../interfaces";

const Providers = ({ children }: IListCardComponentProps) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export { Providers };
