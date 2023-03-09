import title from "../../assets/Nu Kenzie-black.svg";
import { ButtonLink } from "../ButtonLink";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={title} alt="Nu Kenzie" />

        <ButtonLink href="/" size="small" color="gray">
          Voltar
        </ButtonLink>
      </div>
    </Container>
  );
};

export { Header };
