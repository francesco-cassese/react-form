import { useState } from "react";

function CardSingola(props) {

    const { prodotto, onDelete, onEdit } = props;                       // Recupero l'oggetto 'prodotto' e le funzioni dal padre

    const { id, titolo, contenuto, urlImmagine } = prodotto;           // Estraggo i dati dall'oggetto per usarli facilmente nel JSX

    const [staModificando, setStaModificando] = useState(false);                    // Stato per gestire la modalità visione/modifica
    const [nuovoTitolo, setNuovoTitolo] = useState(titolo);                         // Stato per il testo temporaneo dell'input

    const gestisciSalvataggio = () => {                                             // Funzione chiamata al click su 'Salva'
        onEdit(id, nuovoTitolo);                                                    // Invia la modifica al componente App.jsx
        setStaModificando(false);                                                   // Chiude la modalità modifica
    };

    const headerCard = staModificando ? (                                           // Se 'staModificando' è vero:
        <input
            className="form-control form-control-sm mb-2"                           // Mostra l'input di testo di Bootstrap
            value={nuovoTitolo}                                                     // Collega il valore allo stato locale
            onChange={event => setNuovoTitolo(event.target.value)}                  // Aggiorna lo stato mentre l'utente scrive
        />
    ) : (                                                                           // Se 'staModificando' è falso:
        <h5 className="card-title fw-bold">{titolo}</h5>                            // - Mostra il titolo normale
    );

    const bottoneAzione = staModificando ? (                                        //  Se modifico, mostra 'Salva'
        <button className="btn btn-success btn-sm" onClick={gestisciSalvataggio}>
            Salva
        </button>
    ) : (                                                                           //altrimenti mostra, 'Modifica'
        <button className="btn btn-outline-warning btn-sm border-0" onClick={() => setStaModificando(true)}>
            Modifica
        </button>
    );

    return (
        <li className="col d-flex">
            <div className="card h-100 w-100 shadow-sm">
                <img src={urlImmagine} className="card-img-top" alt={titolo} />

                <div className="card-body d-flex flex-column">
                    {headerCard}

                    <p className="card-text flex-grow-1 text-muted small">
                        {contenuto}
                    </p>

                    <div className="d-flex justify-content-end gap-2 mt-3 border-top pt-2">
                        {bottoneAzione}
                        <button className="btn btn-outline-danger btn-sm border-0" onClick={() => onDelete(id)}>
                            Elimina
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CardSingola;