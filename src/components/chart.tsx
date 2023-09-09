import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: Record<number, number>;
}

export const Chart: React.FC<Props> = (props) => {
  return (
    <Bar
      data={{
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{ data: props.data, backgroundColor: "#2f6ee7" }],
      }}
    />
  );
}