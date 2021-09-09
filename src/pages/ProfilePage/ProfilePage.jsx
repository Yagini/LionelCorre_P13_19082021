import React, { useEffect, useState } from "react";

import "./ProfilePage.css";

import { accountsData } from "../../localData/accountsData";
import Accounts from "../../components/Accounts/Accounts";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/actions";

function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const dispatch = useDispatch
  /*useEffect(() => {
    dispatch(userActions.getUser())
  })*/

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {/*<span>{`${user.firstName} ${user.lastName}`}</span>*/}
        </h1>

        <input className="edit-button" type="submit" value="Edit Name" />
        <form className="profile-form-block" onSubmit={handleSubmit}>
          <label htmlFor="firstName"></label>
          <input
            className="profile-form-input"
            type="text"
            id="firstName"
            placeholder={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="lastName"></label>
          <input
            className="profile-form-input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </form>
        <div className="profile-form-block">
          <input className="edit-button profile-form-button" type="submit" value="Save" />
          <input className="edit-button profile-form-button" type="submit" value="Cancel" />
        </div>
      </div>
      <h2 className="index-sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <Accounts key={account.id} title={account.title} amount={account.amount} text={account.text} />
      ))}
    </main>
  );
}

export default ProfilePage;
