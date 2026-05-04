# React Blog Form 📝

## 📌 Descrizione
Un'applicazione web per la gestione di un blog personale, sviluppata con React. Il progetto si focalizza sulla gestione dei form, la manipolazione dello stato (`state`) e la creazione di interfacce interattive che reagiscono agli input dell'utente.

## 🎯 Obiettivi

### 1. Visualizzazione e Struttura (Milestone 1)
Creazione di una dashboard per mostrare i post esistenti.
- **Data Rendering:** Utilizzo del metodo `.map()` per generare dinamicamente la lista degli articoli partendo da un array di oggetti.
- **Component Architecture:** Scomposizione dell'interfaccia in componenti riutilizzabili per mantenere il codice pulito (Bonus).

### 2. Gestione Form e Interattività (Milestone 2)
Implementazione di un sistema di pubblicazione post.
- **Controlled Components:** Gestione dei campi `input` e `textarea` tramite lo stato di React per il monitoraggio dei dati in tempo reale.
- **Form Submission:** Funzionalità di aggiunta di nuovi articoli all'elenco esistente, garantendo l'aggiornamento automatico dell'interfaccia.
- **Unique IDs:** Utilizzo di `crypto.randomUUID()` per garantire chiavi univoche a ogni nuovo elemento della lista.

### 3. Funzionalità Avanzate (Bonus & Super Bonus)
- **CRUD Operations:** Implementazione della cancellazione (Delete) e della modifica (Update) dei post.
- **Media Management:** Gestione dell'upload di immagini dal PC locale per arricchire i contenuti dei post.

## 🛠️ Tecnologie Utilizzate
- **React:** Libreria core per la gestione di UI e stati.
- **JSX:** Sintassi per la definizione dei componenti.
- **JavaScript (ES6+):** Spread operator per l'aggiornamento degli array, gestione degli eventi e UUID.
- **Bootstrap 5.3.8** Stilizzazione del form e layout delle card del blog.

---

## 🧪 Flusso di Lavoro (Logica Applicativa)
1. **Input:** L'utente scrive titolo e contenuto nel form.
2. **Action:** Al click sul tasto "Invia", lo stato dell'applicazione viene aggiornato includendo il nuovo oggetto post.
3. **Reactivity:** React rileva il cambio di stato e "ri-disegna" automaticamente la lista a schermo.

---
BLOG ENGINE READY... 🖊️🚀

*Esercizio Boolean - Corso Full Stack Web Development*