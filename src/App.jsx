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
  return <>
    <Header />
    <Main
      lista={articoli}                         // Passo la lista al Main così le Card possono ciclarci sopra
      add={aggiungiArticolo}                   // Passo la funzione 'Aggiungi articolo' tramite props, associandola ad add
    />
  </>
}
export default App;
