
import './App.css'
//import Title component
import ProductTab from './ProductTab.jsx';
import Msgbox from './Msgbox.jsx';

function Description(){
  return <h3>this is the description component</h3>
}

function App() {
  return (
    <>
    <Msgbox userName="Dipesh" textColor="green" />
      <Msgbox userName="Dipesh" textColor="yellow" />
      <ProductTab />
    </>
  )
}

export default App
