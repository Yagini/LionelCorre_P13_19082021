import React from "react";
import "./ProfilPage.css";

import { accountsData } from "../../localData/accountsData";
import Accounts from "../../components/Accounts/Accounts";

function ProfilPage() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>        
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="index-sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <Accounts key={account.id} title={account.title} amount={account.amount} text={account.text} />
      ))}
    </main>
  );
}

export default ProfilPage;
