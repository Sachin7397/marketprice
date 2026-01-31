
export default function MarketStatus() {
  const hour = new Date().getUTCHours();
  const open = hour >= 1 && hour <= 23;

  return (
    <div className="commodity-card">
      <h3>Market Status</h3>
      <p>{open ? "🟢 Market Open" : "🔴 Market Closed"}</p>
    </div>
  );
}
