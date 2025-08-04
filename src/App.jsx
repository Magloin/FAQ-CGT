import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import Cardbis from './component/Cardbis'

function App() {
  return (
    <div className="bg-slate-50 h-full">
      <div className="grid-row-3">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default App
