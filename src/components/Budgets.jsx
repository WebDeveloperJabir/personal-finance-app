import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";
import { AppFinanceData } from "../Context";

export default function Budgets() {
  const colors = ["#F2CDAC", "#277C78", "#82C9D7", "#D45647", "#5F5A6D", "#7B4D7B", "#597C7C", "#93674F", "#934F6F", "#3F82B2"];
  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const spent = { entertainment: 25, bills: 490, personal_care: 70, dining_out: 306 };
  const budgets = {
    Entertainment: { spent: 0, remaining: 0, budget: 35, users: [], theme: colors[0] },
    Bills: { spent: 0, remaining: 0, budget: 750, users: [], theme: colors[1] },
    Groceries: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[2] },
    Dining_Out: { spent: 0, remaining: 0, budget: 75, users: [], theme: colors[3] },
    Transportation: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[4] },
    Personal_Care: { spent: 0, remaining: 0, budget: 100, users: [], theme: colors[5] },
    Education: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[6] },
    Lifestyle: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[7] },
    Shopping: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[8] },
    General: { spent: 0, remaining: 0, budget: 0, users: [], theme: colors[9] },
  };
  let data = React.useContext(AppFinanceData).data;
  data?.transactions.forEach((item) => {
    let category = item.category.includes(" ") ? item.category.replace(" ", "_") : item.category;
    budgets[category].spent += Number(item.amount) || 0;
    budgets[category].remaining = budgets[category].budget - budgets[category].spent;
    if (budgets[category].users.length < 3) {
      let d = new Date(item.date);
      budgets[category].users.push({ name: item.name, amount: item.amount, date: `${shortMonths[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`, img: item.avatar });
    }
  });
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: "white", padding: "2px 7px", border: "1px solid #ccc", borderRadius: "4px" }}>
          <div style={{ backgroundColor: payload[0].payload.theme, width: "12px", height: "12px", borderRadius: "50%", display: "inline-block", marginRight: "8px" }}></div>${payload[0].value}
        </div>
      );
    }
    return null;
  };
  function lighten(hex, amt = 0.3) {
    let col = hex.replace("#", "");
    if (col.length === 3)
      col = col
        .split("")
        .map((c) => c + c)
        .join("");
    let num = parseInt(col, 16);
    let r = Math.min(255, ((num >> 16) & 255) + 255 * amt);
    let g = Math.min(255, ((num >> 8) & 255) + 255 * amt);
    let b = Math.min(255, (num & 255) + 255 * amt);
    return `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Budgets</h1>
        <button className='add-button'>+ Add New Budget</button>
      </div>
      <div className='content' style={{ marginTop: "20px" }}>
        <div className='budget-cards'>
          <div className='left-side-content'>
            <div className='spending-summary'>
              <div className='charts' style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <ResponsiveContainer>
                  <PieChart width={300} height={300}>
                    <Pie data={Object.values(budgets).filter((b) => b.budget > 0)} cx='50%' cy='50%' innerRadius={90} outerRadius={117} dataKey='budget' startAngle={90} endAngle={450} paddingAngle={0}>
                      {Object.keys(budgets)
                        .filter((k) => budgets[k].budget > 0)
                        .map((key, index) => (
                          <Cell
                            key={index}
                            fill={budgets[key].theme}
                            onMouseOver={(e) => (e.target.style.fill = lighten(budgets[key].theme, -0.15))}
                            onMouseOut={(e) => (e.target.style.fill = budgets[key].theme)}
                          />
                        ))}
                    </Pie>
                    <Pie data={Object.values(budgets).filter((b) => b.budget > 0)} cx='50%' cy='50%' innerRadius={75} outerRadius={91} dataKey='budget' startAngle={90} endAngle={450} paddingAngle={0} border='none'>
                      {Object.keys(budgets)
                        .filter((k) => budgets[k].budget > 0)
                        .map((key, index) => (
                          <Cell
                            key={index}
                            fill={lighten(budgets[key].theme, 0.3)}
                            onMouseOver={(e) => (e.target.style.fill = lighten(budgets[key].theme, -0.15))}
                            onMouseOut={(e) => (e.target.style.fill = lighten(budgets[key].theme, 0.3))}
                          />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                  <h2 style={{ margin: 0, fontSize: "32px" }}>$891</h2>
                  <p style={{ margin: 0, fontSize: "12px", color: "#666", marginTop: "3px" }}>of $960 limit</p>
                </div>
              </div>
              <div className='details'>
                <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Spending Summary</h3>
                <div className='details-info'>
                  {Object.keys(budgets).map((key, index) => (
                    <div key={index} className='budget-item'>
                      <div className='budget-color-bar' style={{ backgroundColor: budgets[key].theme }}></div>
                      <div className='budget-info'>
                        <p>{key.replace("_", " ")}</p>
                        <p>
                          <b>${spent[key.toLowerCase().replace(" ", "_")] || 0}</b> <span>of ${budgets[key].budget}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='right-side-content'>
            {Object.keys(budgets)
              .filter((k) => budgets[k].budget > 0)
              .map((key, index) => (
                <div key={index} className='budget-card'>
                  <div className='top-title'>
                    <h3>{key.replace("_", " ")}</h3>
                    <div className='options'>
                      <button>Edit Budget</button>
                      <hr />
                      <button>Delete Budget</button>
                    </div>
                  </div>
                  <h3>Maximum of ${budgets[key].budget}</h3>
                  <div className='color-div' style={{ backgroundColor: budgets[key].theme }}></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}