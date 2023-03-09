import title from "../../assets/Nu Kenzie-black.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={title} alt="Nu Kenzie" />

        <Link to="/">Voltar</Link>
      </div>
    </Container>
  );
};

export { Header };
