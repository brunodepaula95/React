import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import HomePage from './pages/Home/Home'
import AboutPage from './pages/About/About'
import RegisterPage from './pages/Register/Register'


// a / em path route é o prefixo da rota, isso quer dizer que todas as rotas abaixo devem seguir o mesmo prefixo,ex /about.../menu

//o index é um boolean quer dizer que é o index do prefixo /
const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Route>
))

function App() {
    return(
       <RouterProvider router = {browserRouter} />
       
    )
}

export default App
