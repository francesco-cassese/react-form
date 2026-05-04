import Card from "./components/Card";
import listaProdotti from "./data/listaProdottiCard";

function App() {
  return <>
    <header className="bg-dark text-white py-4 mb-5 shadow">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">React Blog Form</h1>
      </div>
    </header>
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <Card listaElements={listaProdotti} />
        </div>
      </div>
    </div>
  </>
}
export default App;
