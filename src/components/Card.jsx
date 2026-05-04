function Card(props) {
    const listaProdottiJsx = props.listaElements.map(prodotto => {
        console.log(props.listaElements);
        const { id, titolo, contenuto, urlImmagine } = prodotto
        return (
            <li key={id} className="col-12 col-md-4 p-2">
                <div className="card">
                    <img src={urlImmagine} className="card-img-top" alt={titolo} />
                    <div className="card-body">
                        <h5 className="card-title">{titolo}</h5>
                        <p className="card-text">{contenuto}</p>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <ul className="list-unstyled d-flex flex-wrap">
            {listaProdottiJsx}
        </ul>
    )
}
export default Card