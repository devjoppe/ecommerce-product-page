import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Addtocartbar from "./components/Addtocartbar";

library.add(faCheckSquare, faCoffee, faCartShopping)

function App() {
  return (
    <div className="app">
        <div className="container">
          <div className="left-side"></div>

          <div className="right-side">
            {/* Select how many products and add to cart */}
            <Addtocartbar></Addtocartbar>
          </div>

      </div>
    </div>
  );
}

export default App;