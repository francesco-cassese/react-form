function Card(props) {
    const { listaElements, onDelete } = props;
    const listaProdottiJsx = listaElements.map(prodotto => {
        const { id, titolo, contenuto, urlImmagine } = prodotto
        return (
            <li key={id} className="col d-flex">
                <div className="card">
                    <img src={urlImmagine} className="card-img-top" alt={titolo} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{titolo}</h5>
                        <p className="card-text flex-grow-1">{contenuto}</p>
                        <div className="text-end mt-3">
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onDelete(id)}
                            >
                                Elimina
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <ul className="list-unstyled row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {listaProdottiJsx}
        </ul>
    )
}
export default Card