import { darkChartTheme } from "./chartTheme";

export const chartOptions = {
  ...darkChartTheme,

  width: 0,
  height: 450,

  localization: {
    locale: "en-US",
  },

  handleScroll: true,
  handleScale: true,

  autoSize: true,
};