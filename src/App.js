import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TodoList from './TodoList';
import Footer from './Footer';
import {Provider} from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            
            <Navbar></Navbar>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <Header></Header>
                
                <hr className="mt-4" />

                
                <TodoList></TodoList>

                <hr className="mt-4" />

                
                <Footer></Footer>
            </div>
        </div>
        </Provider>
  );
}

export default App;
