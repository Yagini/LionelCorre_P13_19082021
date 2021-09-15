import React, { useState } from "react";

import "./ProfilePage.css";

import { accountsData } from "../../localData/accountsData";
import Accounts from "../../components/Accounts/Accounts";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions/actions";

/**
 * Is the main page, Users can change is profile name and check are transactions
 * @returns render
 */
function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  // handleSubmit for update a user name on the api with a push
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userActions.editUser(firstName, lastName));
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user ? <span>{`${user.firstName} ${user.lastName}`}</span> : <span></span>}
        </h1>

        {showForm ? (
          <form className="profile-form-block" onSubmit={handleSubmit}>
            <label htmlFor="firstName"></label>
            <input
              className="profile-form-input"
              type="text"
              id="firstName"
              name="firstName"
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
            <div className="profile-form-block">
              <input className="edit-button profile-form-button" type="submit" value="Save" />
              <input
                className="edit-button profile-form-button"
                type="button"
                value="Cancel"
                onClick={() => setShowForm(false)}
              />
            </div>
          </form>
        ) : (
          <input
            className="edit-button profile-form-button"
            type="submit"
            value="Edit Name"
            onClick={() => setShowForm(true)}
          />
        )}
      </div>
      <h2 className="index-sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <Accounts key={account.id} title={account.title} amount={account.amount} text={account.text} />
      ))}
    </main>
  );
}

export default ProfilePage;
