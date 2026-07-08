export function createAreaSeries(chart) {
  return chart.addSeries("Area", {
    lineColor: "#EAB308",

    topColor: "rgba(234,179,8,.45)",

    bottomColor: "rgba(234,179,8,.02)",

    lineWidth: 2,
  });
}