
export default function Sentiment() {
  const sentiment = 68; // mock AI/volume based

  return (
    <div className="commodity-card">
      <h3>Buy / Sell Sentiment</h3>
      <p>Buy: {sentiment}% | Sell: {100 - sentiment}%</p>
    </div>
  );
}
