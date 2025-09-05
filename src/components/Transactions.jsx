import React from "react";
import { useState } from "react";
import { AppFinanceData } from "../Context";

export default function Transactions() {
  const data = React.useContext(AppFinanceData).data;
  const sort = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];
  const categories = [
    "All Transactions",
    "Entertainment",
    "Bills",
    "Groceries",
    "Dining Out",
    "Transportation",
    "Personal Care",
    "Education",
    "Lifestyle",
    "Shopping",
    "General",
  ];
  const [sortBy, setSortBy] = useState(sort[0]);
  const [category, setCategory] = useState(categories[0]);
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let formattedDate;
  const [sortActive, setSortActive] = useState("");
  const [categoryActive, setCategoryActive] = useState("");

  const pageNumber = Math.ceil(data?.transactions?.length / 10 || 0);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <h1>Transactions</h1>
      <div className="content">
        <div className="transaction-place">
          <div className="search-and-filter">
            <div className="password-field">
              <input
                type="text"
                placeholder="Search transactions..."
                className="icon-input full-width"
              />
              <img
                src="/assets/images/icon-search.svg"
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <div className="sort-filter">
              <div className="">
                <p>Sort By</p>
                <div className="select-input" style={{ width: "100px" }}>
                  <div
                    className="title"
                    onClick={() => setSortActive(sortActive ? "" : "active")}
                  >
                    {sortBy}{" "}
                    <img
                      src="/assets/images/icon-caret-down.svg"
                      alt=""
                      className={`${sortActive}`}
                    />
                  </div>
                  <div
                    className={`lists ${sortActive}`}
                    style={{ width: "100px" }}
                  >
                    {sort.map((item, index) => (
                      <p
                        key={index}
                        onClick={() => setSortBy(item)}
                        className={sortBy === item ? "active" : ""}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                <p>Category</p>
                <div className="select-input" style={{ width: "180px" }}>
                  <div
                    className="title"
                    onClick={() =>
                      setCategoryActive(categoryActive ? "" : "active")
                    }
                  >
                    {category}{" "}
                    <img
                      src="/assets/images/icon-caret-down.svg"
                      alt=""
                      className={`${categoryActive}`}
                    />
                  </div>
                  <div
                    className={`lists ${categoryActive}`}
                    style={{ width: "180px" }}
                  >
                    {categories.map((item, index) => (
                      <p
                        key={index}
                        onClick={() => setCategory(item)}
                        className={category === item ? "active" : ""}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-transactions">
            <table className="clients-table">
              <thead>
                <tr>
                  <td>Recipient / Sender</td>
                  <td>Category</td>
                  <td>Transaction Date</td>
                  <td className="amount" style={{ fontWeight: "500" }}>
                    Amount
                  </td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.transactions
                    .slice(currentPage * 10, (currentPage + 1) * 10)
                    .map((element, index) => {
                      formattedDate = ((d) =>
                        `${
                          shortMonths[d.getMonth()]
                        } ${d.getDate()}, ${d.getFullYear()}`)(
                        new Date(element.date)
                      );

                      return (
                        <tr key={index}>
                          <td className="name">
                            <div>
                              <img
                                src={`/assets/images/avatars/${element.avatar
                                  .split("/")
                                  .pop()}`}
                                alt={element.name}
                              />
                              {element.name}
                            </div>
                          </td>
                          <td className="small-class">{element.category}</td>
                          <td className="small-class">{formattedDate}</td>
                          <td
                            className={`${
                              element.amount < 0 ? "" : "positive"
                            } amount`}
                          >
                            {element.amount > 0
                              ? `+$${element.amount}`
                              : `-$${Math.abs(element.amount)}`}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            <div className="bottom-buttons-nav">
              <button
                className="transaction-button"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span className="arrow-sign">&#9664;</span> Prev
              </button>
              <div className="pagination-buttons">
                {Array.from({ length: pageNumber }, (_, i) => {
                  return (
                    <button
                      key={i}
                      className={currentPage === i ? "active" : ""}
                      onClick={() => setCurrentPage(i)}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <button
                className="transaction-button"
                disabled={currentPage + 1 === pageNumber}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next <span className="arrow-sign">&#9654;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
