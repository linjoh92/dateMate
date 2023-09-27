import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Layout() {
    
    return  (
      <>
        <Header title ="DateMate" subtitle= "Your Daily Date and Day Companion" />
        <Outlet />
        <Footer title ="@ Copywrite 2023 Linn" subtitle= "Uppgift ONE - Webb- och mobilapplikationsutveckling - USE Typescrpit - SCSS - useState & useEffect"/>
      </>
    ) 
}

