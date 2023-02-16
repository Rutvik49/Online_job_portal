import GetStarted from './features/getStarted'
import ProtectedRoutes from './ProtectedRoute'
import CandidateSignUp from './features/candidate/auth/SignUp'
import CandidateHome from './features/candidate/home'
import CompanySignUp from './features/company/auth/SignUp'
import CompanyHome from './features/company/home'
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
          <Route element={<ProtectedRoutes />} >
            <Route exact path="/selectrole/CandidateSignUp" element={<CandidateSignUp />} />
            <Route exact path="/selectrole/CompanySignUp" element={<CompanySignUp />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/CandidateHome" element={<CandidateHome />} />
            <Route exact path="/CompanyHome" element={<CompanyHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
