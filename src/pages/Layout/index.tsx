import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Layout() {
  return (
    <>
      <Header title="DateMate" />
      <Outlet />
      <Footer title="Copywrite © 2023 Linn J" />
    </>
  )
}
