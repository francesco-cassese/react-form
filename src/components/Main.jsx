import Card from "./card";
import FormArticoli from "./FormArticoli";

function Main(props) {                                     // Ricevo 'props' dal padre (App.jsx)
    const { lista, add } = props;                          // Destructuring: tiro fuori 'lista' e 'add'
    return (
        <main className="container my-5">
            <div className="row">

                <section className="col-12 col-lg-5 mb-5">
                    <FormArticoli onAdd={add} />           {/* Passo la funzione 'add' al form chiamandola 'onAdd' (il form la aspetta così!) */}
                </section>

                <section className="col-12 col-lg-7">
                    <h2 className="mb-4">Lista Blog</h2>
                    <Card listaElements={lista} />         {/* Passo la lista di articoli al componente Card per ciclarli */}
                </section>

            </div>
        </main>
    )
}
export default Main