import notFound from "../../assets/notFound.svg";
import { Link } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  return (
    <Container>
      <div>
        <h1>Ops!</h1>

        <p>
          Não encontramos a página que você estava procurando,{" "}
          <b>vamos tentar novamente</b>.
        </p>

        <Link to="/">Ir para home</Link>
      </div>

      <img src={notFound} alt="error" />
    </Container>
  );
};

export { NotFound };
