import Product from "./Product";

function ProductTab(){
    let options = ["hi-tech", "gadgets", "accessories"];
    return(
        <>
    <Product title="phone" price={10000} features={options}/>
    <Product title="laptop" price={50000}/>

    </>
    )
}

export default ProductTab