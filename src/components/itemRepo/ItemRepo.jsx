
import { ItemContainer } from "./styles"

const ItemRepo = ({ repo, handleRemoveRepo }) => {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer >
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" className="remove">Ver repositório</a>
            <a href="#" onClick={handleRemove} className="remove">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo