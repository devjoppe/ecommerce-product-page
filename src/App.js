import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button from "./components/Button";

library.add(faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <h1>Testar</h1>
      <div className="addproduct">
        <Button buttonText={'Add to cart'} />
      </div>
    </div>
  );
}

export default App;
