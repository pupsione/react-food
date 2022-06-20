import { Route, Routes } from 'react-router-dom';
import { Header } from './componets/Header';
import { Footer } from './componets/Footer';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/category/:name' element={<Category />}></Route>
        <Route path='/meal/:id' element={<Recipe />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
