import './Product.css'
import Price from './Price.jsx';

function Product({title, idx}){
  let oldPrices = ["199.99", "299.99", "399.99", "499.99"];
  let newPrices = ["149.99", "249.99", "349.99", "449.99"];
  let descriptions = [
    ["High precision wireless mouse with ergonomic design.","5 programmable buttons."],
    ["Second generation Apple Pencil for iPad.","Designed for iPad Pro."],
    ["Latest Samsung Galaxy S21 smartphone with advanced features.", "Includes 5G connectivity."],
    ["Zebronics Zeb-transformer gaming keyboard with RGB lighting.","Mechanical keys for better response."]
  ];
  return(
    <div className="Product">
      <p>{title}</p>
      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  )
}

export default Product