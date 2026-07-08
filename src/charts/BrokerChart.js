import { createChart } from "lightweight-charts";
import { chartOptions } from "./chartOptions";

export function createBrokerChart(container) {
  return createChart(
    container,
    chartOptions
  );
}