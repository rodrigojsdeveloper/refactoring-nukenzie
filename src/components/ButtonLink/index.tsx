import { IButtonProps } from "../../interfaces";
import { Container } from "./style";

const ButtonLink = ({ children, href, size, color, onClick }: IButtonProps) => {
  return (
    <Container size={size} color={color} href={href} onClick={onClick}>
      {children}
    </Container>
  );
};

export { ButtonLink };
