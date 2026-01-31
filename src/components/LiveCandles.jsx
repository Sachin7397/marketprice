
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LiveCandles() {
  const ref = useRef();

  useEffect(() => {
    new Chart(ref.current, {
      type: "candlestick",
      data: {
        datasets: [{
          label: "Gold",
          data: [
            { x: "10:00", o: 5900, h: 5950, l: 5880, c: 5920 },
            { x: "10:05", o: 5920, h: 5980, l: 5910, c: 5960 }
          ]
        }]
      }
    });
  }, []);

  return <canvas ref={ref} height="120"></canvas>;
}
