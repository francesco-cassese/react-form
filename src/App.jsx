import Card from "./components/Card";
import listaArticoliPartenza from "./data/listaArticoliBlog";
import { useState } from "react";

function App() {

  return <>
    <header className="bg-dark text-white py-4 mb-5 shadow">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">React Blog Form</h1>
      </div>
    </header>
    <main>
      <section className="col-12 col-md-8 mb-5">
        <div className="card shadow-sm border-0 bg-light p-4">
          <h2 className="h4 mb-4 text-primary border-bottom pb-2">Nuovo Articolo</h2>

          <form>
            {/* Input Titolo */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Titolo dell'articolo
                <input
                  type="text"
                  id="titolo"
                  className="form-control form-control-lg"
                  placeholder="Inserisci un titolo accattivante..."
                />
              </label>
            </div>

            {/* Input Contenuto */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Contenuto del post
                <textarea
                  id="contenuto"
                  className="form-control"
                  rows="5"
                  placeholder="Di cosa vuoi parlare oggi?"
                ></textarea>
              </label>
            </div>

            {/* Bottone di invio */}
            <div className="text-end">
              <button type="submit" className="btn btn-primary px-5 shadow-sm fw-bold">
                Pubblica
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <Card listaElements={listaArticoliPartenza} />
          </div>
        </div>
      </div>
    </main>
  </>
}
export default App;
