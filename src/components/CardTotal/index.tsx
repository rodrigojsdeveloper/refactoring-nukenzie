import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ICardTotalComponentProps } from "../../interfaces";
import { Doughnut } from "react-chartjs-2";
import { Container } from "./style";

const CardTotal = ({ cards }: ICardTotalComponentProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Entrada", "Despesas"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          cards
            .filter((card) => card.option === "Entry")
            .reduce(
              (valoAnterior, valorAtual) => valoAnterior + +valorAtual.price,
              0
            ),

          cards
            .filter((card) => card.option === "Expenses")
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
            .toFixed(2)
            .replace(".", ",")}
        </p>
      </p>
      <Doughnut data={data} />
    </Container>
  );
};

export { CardTotal };
