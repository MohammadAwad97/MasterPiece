import "./ProductCard.css";
import PropTypes from "prop-types"; // Import PropTypes 

function PoductCard({product}) {
  return (
    <div className="product_Container">
      <div className="img_Cont">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product"
        />
      </div>
      <div className="information">
        <div className="mainTitle">
        <h2 className="text-xl">{product.name}</h2>
        <p className="description">{product.short_description}</p>
        </div>
        <h1 className="price text-3xl">{product.price}</h1>
      </div>
      <div className="buttons">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

PoductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    storeId: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    short_description: PropTypes.number.isRequired,
  }).isRequired,
};


export default PoductCard;
