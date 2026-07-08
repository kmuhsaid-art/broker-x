export function createCandleSeries(chart) {
  return chart.addSeries("Candlestick", {
    upColor: "#22C55E",
    downColor: "#EF4444",

    borderUpColor: "#22C55E",
    borderDownColor: "#EF4444",

    wickUpColor: "#22C55E",
    wickDownColor: "#EF4444",
  });
}