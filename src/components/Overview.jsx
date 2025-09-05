import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="content">
        <div className="three-money-states">
          <div
            className="current-balance money-state"
            style={{ backgroundColor: "#201F24", color: "white" }}
          >
            <p>Current Balance</p>
            <br />
            <h2>$5,000</h2>
          </div>
          <div className="income money-state">
            <p>Income</p>
            <br />
            <h2>$2,000</h2>
          </div>
          <div className="expenses money-state">
            <p>Expenses</p>
            <br />
            <h2>$1,500</h2>
          </div>
        </div>
        <div className="bottom-content">
          <div className="pots details-card">
            <div className="card-title">
              <h3>Pots</h3>
              <Link to="/dashboard/pots">
                See Details{" "}
                <img src="/assets/images/icon-caret-right.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="budgets details-card">
            <div className="card-title">
              <h3>Budgets</h3>
              <Link to="/dashboard/budgets">
                See Details{" "}
                <img src="/assets/images/icon-caret-right.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="budgets details-card">
            <div className="card-title">
              <h3>Transactions</h3>
              <Link to="/dashboard/transactions">
                See Details{" "}
                <img src="/assets/images/icon-caret-right.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="budgets details-card">
            <div className="card-title">
              <h3>Recurring Bills</h3>
              <Link to="/dashboard/recurring-bills">
                See Details{" "}
                <img src="/assets/images/icon-caret-right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
