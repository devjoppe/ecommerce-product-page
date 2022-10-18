import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Addtocartbar from "./components/Addtocartbar";

library.add(faCheckSquare, faCoffee, faCartShopping)

function App() {
  return (
    <div className="App">
      <h1>Testar</h1>
      <Addtocartbar></Addtocartbar>
    </div>
  );
}

export default App;
