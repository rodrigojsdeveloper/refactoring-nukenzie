import title from "../../assets/Nu Kenzie-black.svg";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <img src={title} alt="Nu Kenzie" />

        <Button size="s" color="dashboard" onClick={() => navigate("/")}>
          Start
        </Button>
      </div>
    </Container>
  );
};

export { Header };
