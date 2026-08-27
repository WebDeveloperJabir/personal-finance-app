import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { FinanceDataProvider } from "./Context";
import Loader from "./components/Loader";

function App() {
  return (
    <FinanceDataProvider>
      {/* <Loader /> */}
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/login' replace />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/sign-up' element={<Auth />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
    </FinanceDataProvider>
  );
}

export default App;
