
import './App.css'
//import Title component
import ProductTab from './ProductTab.jsx';
import Button from './Button.jsx';

function Description(){
  return <h3>this is the description component</h3>
}

function App() {
  return (
    <>
     <h2>Blockbuster deals | Shop now</h2>
      <ProductTab />
      <Button />
    </>
  )
}

export default App
