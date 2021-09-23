import React from "react";
import PropTypes from "prop-types";

import "./Accounts.css";

function Accounts({ title, amount, text }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{text}</p>
      </div>
      <div className="account-content-wrapper">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

Accounts.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Accounts;
