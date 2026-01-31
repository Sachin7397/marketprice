
export default function Alerts() {
  const notify = () => {
    Notification.requestPermission().then(() => {
      new Notification("Gold Alert", { body: "Price crossed your level!" });
    });
  };

  return (
    <div className="commodity-card">
      <h3>Price Alerts</h3>
      <button onClick={notify}>Enable Alerts</button>
    </div>
  );
}
