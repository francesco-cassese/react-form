import Card from "./Card";

function CardList(props) {
    const { listaElements, onDelete, onEdit } = props;

    return (
        <ul className="list-unstyled row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {listaElements.map(prodotto => (
                <Card
                    key={prodotto.id}
                    prodotto={prodotto}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}

export default CardList;