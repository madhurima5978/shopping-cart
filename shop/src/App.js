import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateUser } from "./pages/CRUD/createUser";
import UpdateUser from "./pages/CRUD/updateUser";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/create" element={<CreateUser/>}/>
            <Route path="/update" element={<UpdateUser/>}/>
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
