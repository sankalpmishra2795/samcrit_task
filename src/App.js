import './App.css';
import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
   </Provider>
  );
}

export default App;
