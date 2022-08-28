import { ItemList } from "../ItemList.js/ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({titulo}) => {
    return(
        <div className='ItemListContainer'>
            <ItemList/>
        </div>
    )
}
export default ItemListContainer