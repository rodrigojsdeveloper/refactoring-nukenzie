import logo from "../../assets/Illustration.svg";
import title from "../../assets/Nu Kenzie.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={title} alt="Nu Kenzie" />

          <h1>Centralize o controle de suas finanças</h1>

          <p>com rapidez e segurança</p>

          <Link to="/dashboard">Começar</Link>
        </div>

        <img src={logo} alt="Ilustração" />
      </div>
    </Container>
  );
};

export { Home };
