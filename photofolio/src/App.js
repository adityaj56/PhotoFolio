import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginForm from './components/login/login';
import SignUpForm from './components/signup/signup';
// import Layout from './components/layout/layout';
import Navbar from './components/navbar/navbar';
import Album from './components/album/album';

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <LoginForm />},
    {path: '/sign-up', element: <SignUpForm />},
    {path: '/home', element: <Navbar />, children: [
      {path: '', element: <Album />}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
