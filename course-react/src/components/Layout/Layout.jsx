import './Layout.css'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
//dessa forma é uma forma de evitar ficar repetindo codigo, e compartilhar elementos que são usados em varias rotas de uma forma melhor
export default function Layout(){
    return (
      <>
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <footer>

        </footer>
      </>
    )
}