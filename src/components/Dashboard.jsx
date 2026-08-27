import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Transactions from "./Transactions";
import Budgets from "./Budgets";
import Pots from "./Pots";
import RecurringBills from "./RecurringBills";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="pots" element={<Pots />} />
          <Route path="recurring-bills" element={<RecurringBills />} />
        </Routes>
      </div>
    </>
  );
}
