import './Product.css'

function Product({title, price, features = []}){
    let styles = {backgroundColor: price > 20000 ? 'blue' : null};
  return(
    <div className="Product" style={styles}>
      <h2>{title}</h2>
        <h4>Price: ${price}</h4>
      <p>Details about the product will be displayed here.</p>
      <p> features: {Array.isArray(features) ? features.join(', ') : features}</p>
    </div>
  )
}

export default Product