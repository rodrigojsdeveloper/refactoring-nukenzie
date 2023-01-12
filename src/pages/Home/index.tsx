import { Button } from "../../components/Button";
import logo from "../../assets/Illustration.svg";
import title from "../../assets/Nu Kenzie.svg";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <div>
          <img src={title} alt="Nu Kenzie" />

          <div>
            <h1>Centralize control of your finances</h1>
          </div>

          <small>quickly and safely</small>

          <div className="divBotao">
            <Button
              size="m"
              color="home"
              onClick={() => navigate("/dashboard")}
            >
              Start
            </Button>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="Illustration" />
        </div>
      </Content>
    </Container>
  );
};

export { Home };
