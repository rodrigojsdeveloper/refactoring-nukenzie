import { ButtonLink } from "../../components/ButtonLink";
import logo from "../../assets/Illustration.svg";
import title from "../../assets/Nu Kenzie.svg";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={title} alt="Nu Kenzie" />

          <h1>Centralize o controle de suas finanças</h1>

          <p>com rapidez e segurança</p>

          <ButtonLink href="/dashboard" size="medium" color="pink">
            Começar
          </ButtonLink>
        </div>

        <img src={logo} alt="ilustração" />
      </div>
    </Container>
  );
};

export { Home };
