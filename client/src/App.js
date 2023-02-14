import GetStarted from './features/getStarted'
import CandidateSignUp from './features/candidate/auth/SignUp'
import CompanySignUp from './features/company/auth/SignUp'
import SignIn from './components/SignIn'
import SelectRole from './features/selectRole'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route exact path="/selectrole" element={<SelectRole />} />
          <Route exact path="/selectrole/CandidateSignUp" element={<CandidateSignUp />} />
          <Route exact path="/selectrole/CompanySignUp" element={<CompanySignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
