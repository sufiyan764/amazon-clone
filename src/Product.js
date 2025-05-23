import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price, 
                rating: rating
            }
        })
    }

    return (  
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">

                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img 
                src={image}
                alt = 'product'
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}
 
export default Product;