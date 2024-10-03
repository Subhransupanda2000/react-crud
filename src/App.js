import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import GetUser from './pages/GetUser';
import AddUsers from './pages/AddUsers';
import UpdateUser from './pages/UpdateUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<GetUser/>}/>
        <Route path='/add'element={<AddUsers/>}/>
        <Route path='/update/:id'element={<UpdateUser/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
