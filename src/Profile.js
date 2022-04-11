import Header from "./components/Header";
import ProfileUser from "./components/ProfileUser";
import UserInput from "./components/UserInput";
import Button from "./components/Button";

function Profile() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main>
        <ProfileUser
          name="Jared"
          email="jared@jared.com"
          memberLevel="Member"
        />
        <UserInput
          type="text"
          label="Enter secret password to become a member:"
          name="member_secret"
          placeholder="Enter secret..."
        />
        <Button text="Submit Secret" onClick={() => console.log("click")} />
        <h3>Delete Account</h3>
        <Button
          text="Delete Account"
          onClick={() => console.log("Delete Account")}
        />
      </main>
    </>
  );
}

export default Profile;
