import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ICardArray } from "../../interfaces";
import { Doughnut } from "react-chartjs-2";
import { Container } from "./style";

const CardTotal = ({ cards }: ICardArray) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const getTotalValue = (option: string) => {
    return cards
      .filter((card) => card.option === option)
      .reduce(
        (previousValue, currentValue) => previousValue + +currentValue.price,
        0
      );
  };

  const totalIncome = getTotalValue("Entradas");
  const totalExpenses = getTotalValue("Despesas");
  const totalOverall = cards.reduce(
    (previousValue, currentValue) => previousValue + +currentValue.price,
    0
  );

  const data = {
    labels: ["Entradas", "Despesas"],
    datasets: [
      {
        label: "Valor",
        data: [totalIncome, totalExpenses],
        backgroundColor: ["rgb(3, 184, 152)", "rgb(233, 236, 239)"],
        borderColor: ["rgb(3, 184, 152)", "rgb(233, 236, 239)"],
      },
    ],
  };

  return (
    <Container>
      <p>
        Valor total: <p>R$ {totalOverall.toLocaleString("pt-BR")}</p>
      </p>
      <Doughnut data={data} />
    </Container>
  );
};

export { CardTotal };
