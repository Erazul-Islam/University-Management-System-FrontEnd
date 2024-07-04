import './App.css'
import Mainlayout from './components/layouts/Mainlayout'
import ProtectedRoute from './components/layouts/ProtectedRoute'

function App() {



  return (

    <div>
      <ProtectedRoute>
        <Mainlayout></Mainlayout>
      </ProtectedRoute>
    </div>
  )
}

export default App
