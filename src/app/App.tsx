import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Risks } from './pages/Risks/Risks'
import { Calculator } from './pages/Calculator/Calculator'
import { Auth } from './pages/Auth/Auth'
import { Analytics } from './pages/Analytics/Analytics'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="/cost-estimate" element={<Calculator />} />
          <Route path="/risk-assessment" element={<Risks />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
