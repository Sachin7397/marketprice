
import Header from "./components/Header";
import LiveCandles from "./components/LiveCandles";
import MarketStatus from "./components/MarketStatus";
import Sentiment from "./components/Sentiment";
import Alerts from "./components/Alerts";
import Prediction from "./components/Prediction";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MarketStatus />
        <LiveCandles />
        <Sentiment />
        <Alerts />
        <Prediction />
      </main>
    </>
  );
}
