import Card from "./components/card";
import listaProdotti from "./data/listaProdottiCard";

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <Card listaElements={listaProdotti} />
        </div>
      </div>
    </div>
  );
}
export default App;
