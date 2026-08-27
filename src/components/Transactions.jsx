import React from "react";
import { useState } from "react";
import { AppFinanceData } from "../Context";
import { useSearchParams } from "react-router-dom";
import InputList from "./InputList";

export default function Transactions() {
  const data = React.useContext(AppFinanceData).data?.transactions;
  const sort = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];
  const categories = ["All Transactions", "Entertainment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care", "Education", "Lifestyle", "Shopping", "General"];
  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let formattedDate;
  const [sortActive, setSortActive] = useState("");
  const [categoryActive, setCategoryActive] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByReal = searchParams.get("sort") || "Latest";
  const categoryReal = searchParams.get("category") || "All Transactions";
  const [sortBy, setSortBy] = useState(sortByReal);
  const [category, setCategory] = useState(categoryReal);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSortChange = (newSort, newCategory) => setSearchParams({ sort: newSort, category: newCategory });
  const getSortFunc = (sortBy) => {
    return (a, b) => {
      switch (sortBy) {
        case "Latest":
          return new Date(b.date) - new Date(a.date);
        case "Oldest":
          return new Date(a.date) - new Date(b.date);
        case "A to Z":
          return a.name.localeCompare(b.name);
        case "Z to A":
          return b.name.localeCompare(a.name);
        case "Highest":
          return b.amount - a.amount;
        case "Lowest":
          return a.amount - b.amount;
        default:
          return 0;
      }
    };
  };
  const filteredAndSortedData = data
    ?.filter((item) => (category === "All Transactions" || item.category === category) && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(getSortFunc(sortBy));
  const pageNumber = Math.ceil(filteredAndSortedData?.length / 10 || 0);
  if (sortBy !== sortByReal || category !== categoryReal) {
    handleSortChange(sortBy, category);
  }
  if (currentPage >= pageNumber && pageNumber > 0) {
    setCurrentPage(pageNumber - 1);
  }
  return (
    <div>
      <h1>Transactions</h1>
      <div className='content'>
        <div className='transaction-place'>
          <div className='search-and-filter'>
            <div className='password-field'>
              <input type='text' placeholder='Search transactions...' className='icon-input full-width' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <img src='/images/icon-search.svg' alt='' style={{ width: "15px", height: "15px" }} />
            </div>
            <div className='sort-filter'>
              <div className=''>
                <p style={{ fontSize: "14px" }}>Sort By</p>
                <InputList
                  toggleFunction={() => setSortActive(sortActive === "active" ? "" : "active")}
                  imgSrc='/images/icon-caret-down.svg'
                  altText='Sort Icon'
                  imgClassname={sortActive}
                  divClassname={sortActive}
                  mapArray={sort}
                  listClassname={sortBy}
                  inputTitle={sortBy}
                  listFunction={(item) => {
                    setSortBy(item);
                    handleSortChange(item, category);
                  }}
                  width={"100px"}
                />
              </div>
              <div className=''>
                <p style={{ fontSize: "14px" }}>Category</p>
                <InputList
                  toggleFunction={() => setCategoryActive(categoryActive === "active" ? "" : "active")}
                  imgSrc='/images/icon-caret-down.svg'
                  altText='Sort Icon'
                  imgClassname={categoryActive}
                  divClassname={categoryActive}
                  mapArray={categories}
                  listClassname={category}
                  inputTitle={category}
                  listFunction={(item) => {
                    setCategory(item);
                    handleSortChange(sortBy, item);
                  }}
                  width={"180px"}
                />
              </div>
            </div>
          </div>
          <div className='main-content-transactions'>
            <table className='clients-table'>
              <thead>
                <tr>
                  <td>Recipient / Sender</td>
                  <td>Category</td>
                  <td>Transaction Date</td>
                  <td className='amount' style={{ fontWeight: "500" }}>
                    Amount
                  </td>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedData &&
                  filteredAndSortedData.slice(currentPage * 10, (currentPage + 1) * 10).map((element, index) => {
                    formattedDate = ((d) => `${shortMonths[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`)(new Date(element.date));

                    return (
                      <tr key={index}>
                        <td className='name'>
                          <div>
                            <img src={`/images/avatars/${element.avatar.split("/").pop()}`} alt={element.name} />
                            {element.name}
                          </div>
                        </td>
                        <td className='small-class'>{element.category}</td>
                        <td className='small-class'>{formattedDate}</td>
                        <td className={`${element.amount < 0 ? "" : "positive"} amount`}>{element.amount > 0 ? `+$${element.amount}` : `-$${Math.abs(element.amount)}`}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className='bottom-buttons-nav'>
              <button className='transaction-button' disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
                <span className='arrow-sign'>&#9664;</span> Prev
              </button>
              <div className='pagination-buttons'>
                {Array.from({ length: pageNumber }, (_, i) => {
                  return (
                    <button key={i} className={currentPage === i ? "active" : ""} onClick={() => setCurrentPage(i)}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <button className='transaction-button' disabled={currentPage + 1 === pageNumber} onClick={() => setCurrentPage(currentPage + 1)}>
                Next <span className='arrow-sign'>&#9654;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
