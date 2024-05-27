import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"



function App() {

  return (
    <div className="min-h-screen flex flex-col bg-neutral-300">
      <Header />
      <main className="flex-grow  w-full">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
