import Footer from "./components/Footer"
import Header from "./components/Header"
import BooksPage from "./pages/BooksPage"


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-neutral-300">
      <Header />
      <main className="flex-grow  w-full">
        <BooksPage></BooksPage> 
      </main>
      <Footer />
    </div>
  )
}

export default App
