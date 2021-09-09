import React from "react";
import "./Accounts.css";

function Accounts({ title, amount, text }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}Argent Bank Cheking (x8349)</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{text}</p>
      </div>
      <div className="account-content-wrapper">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Accounts;
