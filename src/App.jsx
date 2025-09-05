import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
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
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
    </FinanceDataProvider>
  );
}

export default App;
