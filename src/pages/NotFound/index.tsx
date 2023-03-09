import { ButtonLink } from "../../components/ButtonLink";
import notFound from "../../assets/notFound.svg";
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

        <ButtonLink href="/" size="medium" color="pink">
          Ir para home
        </ButtonLink>
      </div>

      <img src={notFound} alt="error" />
    </Container>
  );
};

export { NotFound };
