import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ICardArray } from "../../interfaces";
import { Doughnut } from "react-chartjs-2";
import { Container } from "./style";

const CardTotal = ({ cards }: ICardArray) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Entradas", "Despesas"],
    datasets: [
      {
        label: "Valor",
        data: [
          cards
            .filter((card) => card.option === "Entradas")
            .reduce(
              (valoAnterior, valorAtual) => valoAnterior + +valorAtual.price,
              0
            ),

          cards
            .filter((card) => card.option === "Despesas")
            .reduce(
              (valoAnterior, valorAtual) => valoAnterior + +valorAtual.price,
              0
            ),
        ],
        backgroundColor: ["rgb(3, 184, 152)", "rgb(233, 236, 239)"],
        borderColor: ["rgb(3, 184, 152)", "rgb(233, 236, 239)"],
      },
    ],
  };

  return (
    <Container>
      <p>
        Valor total:{" "}
        <p>
          R${" "}
          {cards
            .reduce(
              (valoAnterior, valorAtual) => valoAnterior + +valorAtual.price,
              0
            )
            .toLocaleString("pt-BR")}
        </p>
      </p>
      <Doughnut data={data} />
    </Container>
  );
};

export { CardTotal };
