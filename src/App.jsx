import Header from "./components/Header";
import Main from "./components/Main";
import listaArticoliPartenza from "./data/listaArticoliBlog";
import { useState } from "react";

function App() {
  // Creo lo stato: 'articoli' sono quelli che vedo, 'setArticoli' serve per aggiungerne altri
  const [articoli, setArticoli] = useState(listaArticoliPartenza);

  // Questa funzione riceve il nuovo post dal form e lo "spara" dentro la lista degli articoli
  const aggiungiArticolo = nuovoPost => {
    setArticoli([...articoli, nuovoPost]);     // Creo un nuovo array (copio i vecchi e aggiungo il nuovo)
  };

  const cancellaArticolo = idDaEliminare => {
    // Tengo solo gli articoli che non hanno l'id che voglio cancellare
    setArticoli(articoli.filter(articolo => articolo.id !== idDaEliminare));
  };

  const modificaTitolo = (idDaModificare, nuovoTitolo) => {
    setArticoli(articoli.map(articolo => {
      if (articolo.id === idDaModificare) {
        // Restituisco una copia dell'articolo ma con il titolo cambiato
        return { ...articolo, titolo: nuovoTitolo };
      }
      return articolo;
    }));
  };
  return <>
    <Header />
    <Main
      lista={articoli}                         // Passo la lista al Main così le Card possono ciclarci sopra
      add={aggiungiArticolo}                   // Passo la funzione 'Aggiungi articolo' tramite props, associandola ad add
      onDelete={cancellaArticolo}              // Passo la funzione 'CancellaArticolo' tramite props, associandola a onDelete
      onEdit={modificaTitolo}                  // Passo la funzione 'ModificaTitolo' tramite props, associandola a onEdit
    />
  </>
}
export default App;
