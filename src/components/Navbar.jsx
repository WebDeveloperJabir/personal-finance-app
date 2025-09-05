import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <img src="/assets/images/finance-text.svg" alt="" />
      <ul>
        <li>
          <Link
            to="/dashboard/overview"
            className={
              location.pathname === "/dashboard/overview" ? "active" : ""
            }
          >
            <img src="/assets/images/icon-nav-overview.svg" alt="" />
            Overview
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/transactions"
            className={
              location.pathname === "/dashboard/transactions" ? "active" : ""
            }
          >
            <img src="/assets/images/icon-nav-transactions.svg" alt="" />
            Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/budgets"
            className={
              location.pathname === "/dashboard/budgets" ? "active" : ""
            }
          >
            <img src="/assets/images/icon-nav-budgets.svg" alt="" />
            Budgets
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/pots"
            className={location.pathname === "/dashboard/pots" ? "active" : ""}
          >
            <img src="/assets/images/icon-nav-pots.svg" alt="" />
            Pots
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/recurring-bills"
            className={
              location.pathname === "/dashboard/recurring-bills" ? "active" : ""
            }
          >
            <img src="/assets/images/icon-nav-recurring-bills.svg" alt="" />
            Recurring Bills
          </Link>
        </li>
      </ul>
    </nav>
  );
}
