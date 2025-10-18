import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
        <Navbar />
        <HomePage />
    </div>
  )
}

export default App