import { useState } from "react";

const listaVuota = {                                                         // Definisco lo schema dati iniziale (reset)
    titolo: "",
    contenuto: "",
    urlImmagine: ""
};

function FormArticoli(props) {
    const [nuovoArticolo, setNuovoArticolo] = useState(listaVuota);          // Lo stato che tiene traccia di cosa scrivo nel form

    const changeGenericHandler = event => {
        const { name, value, type, files } = event.target;                   // Estraggo le info dall'input che ha scatenato l'evento

        let valoreFinale = value;

        if (type === "file") {                                               // Se è di tipo file
            const fileCaricato = files[0];
            valoreFinale = fileCaricato ? URL.createObjectURL(fileCaricato) : ""; // Trasformo il file in un indirizzo leggibile dal browser
        }

        setNuovoArticolo({
            ...nuovoArticolo,                                                // Copio l'oggetto attuale
            [name]: valoreFinale                                             // Aggiorno dinamicamente la proprietà
        });
    };

    const submitHandler = event => {
        event.preventDefault();                                              // Evito che la pagina si ricarichi

        const articoloCompleto = {
            ...nuovoArticolo,
            id: crypto.randomUUID(),                                         // Genero un ID unico per evitare errori di 'key' nelle liste
        };

        props.onAdd(articoloCompleto);                                       // Passo l'oggetto finito al componente padre 
        setNuovoArticolo(listaVuota);                                        // Pulisco i campi del form dopo l'invio
    };

    return (
        <div className="card shadow-sm border-0 bg-light p-4">
            <h2 className="h4 mb-4 text-primary border-bottom pb-2">Nuovo Articolo</h2>

            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="titolo" className="form-label fw-semibold">Titolo</label>
                    <input
                        type="text"
                        id="titolo"
                        name="titolo"
                        placeholder="Aggiungi un titolo accattivante"
                        className="form-control"
                        value={nuovoArticolo.titolo}
                        onChange={changeGenericHandler}
                        required
                    />
                </div>

                <div id="add-photo" className="mb-3">
                    <label htmlFor="upload-img" className="form-label fw-semibold">Immagine:</label>
                    <input
                        type="file"
                        id="upload-img"
                        name="urlImmagine"
                        className="form-control"
                        accept="image/*"
                        onChange={changeGenericHandler}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contenuto" className="form-label fw-semibold">Contenuto</label>
                    <textarea
                        id="contenuto"
                        name="contenuto"
                        placeholder="Di cosa si tratta?"
                        className="form-control"
                        rows="5"
                        value={nuovoArticolo.contenuto}
                        onChange={changeGenericHandler}
                        required
                    ></textarea>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary px-5 shadow-sm fw-bold">
                        Pubblica
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormArticoli;