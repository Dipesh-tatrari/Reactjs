import Product from "./Product";

function ProductTab(){
    let styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
    return(
    <div style={styles}>
    <Product title="Logitech MX Master" idx={0}/>
    <Product title="Apple Pencil (2nd gen)" idx={1}/>
    <Product title="Samsung Galaxy S21" idx={2}/>
    <Product title="Zebronics Zeb-transformer" idx={3}/>
    </div>
    )
}

export default ProductTab