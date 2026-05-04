import Card from "./components/Card";
import Header from "./components/Header";
import listaArticoliBlog from "./data/listaArticoliBlog";
import { useState } from "react";

function App() {

  return <>
    <Header />
    <main>
      <section className="container my-5">
        <div className="row">
          <div className="col-12">
            <Card listaElements={listaArticoliBlog} />
          </div>
        </div>
      </section>
      <section className="col-12 col-md-8 mb-5 mx-auto">
        <div className="card shadow-sm border-0 bg-light p-4">
          <h2 className="h4 mb-4 text-primary border-bottom pb-2">Nuovo Articolo</h2>

          <form>
            {/* Input Titolo */}
            <div className="mb-3">
              <label htmlFor="titolo" className="form-label fw-semibold">Titolo dell'articolo</label>
              <input
                type="text"
                id="titolo"
                className="form-control form-control-lg"
                placeholder="Inserisci un titolo accattivante..."
              />
            </div>

            {/* Input Contenuto */}
            <div className="mb-4">
              <label htmlFor="contenuto" className="form-label fw-semibold">Contenuto del post</label>
              <textarea
                id="contenuto"
                className="form-control"
                rows="5"
                placeholder="Di cosa vuoi parlare oggi?"
              ></textarea>
            </div>

            {/* Caricamento foto */}
            <div id="add-photo" className="mb-3">
              <label htmlFor="upload-img" className="form-label fw-semibold">Aggiungi un'immagine:</label>
              <input
                type="file"
                id="upload-img"
                name="foto"
                className="form-control"
                accept="image/*"
              />
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
    </main>
  </>
}
export default App;
