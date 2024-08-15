import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }

]
)
function App() {
  return (
    <div className="">
     
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
      
    </div>
  );
}

export default App;
