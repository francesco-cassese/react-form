import Card from "./card";
import FormArticoli from "./FormArticoli";

function Main(props) {                                     // Ricevo 'props' dal padre (App.jsx)
    const { lista, add, onDelete } = props;                  // Destructuring: tiro fuori 'lista' e 'add'
    return (
        <main className="container my-5">

            <div className="row">
                <section className="col-12">
                    <h2 className="mb-4">Lista Blog</h2>
                    <Card
                        listaElements={lista}
                        onDelete={onDelete} />
                </section>
            </div>

            <div className="row">
                <section className="col-12 mb-5">
                    <FormArticoli
                        onAdd={add} />
                </section>
            </div>

        </main>
    )
}
export default Main