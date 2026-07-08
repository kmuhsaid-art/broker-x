import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function TradingChartCanvas() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,

      layout: {
        background: {
          color: "#131A29",
        },

        textColor: "#9CA3AF",
      },

      grid: {
        vertLines: {
          color: "#1F2937",
        },

        horzLines: {
          color: "#1F2937",
        },
      },
    });

    const series = chart.addAreaSeries({
      lineColor: "#EAB308",

      topColor: "rgba(234,179,8,0.35)",

      bottomColor: "rgba(234,179,8,0)",
    });

    series.setData([
      { time: "2026-06-01", value: 102 },
      { time: "2026-06-02", value: 110 },
      { time: "2026-06-03", value: 107 },
      { time: "2026-06-04", value: 120 },
      { time: "2026-06-05", value: 126 },
      { time: "2026-06-06", value: 122 },
      { time: "2026-06-07", value: 135 },
      { time: "2026-06-08", value: 140 },
    ]);

    const resize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="rounded-3xl overflow-hidden"
    />
  );
}