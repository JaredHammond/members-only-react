import Header from "./components/Header";
//import ProfileUser from "./components/ProfileUser";
import UserInput from "./components/UserInput";
//import AccountDeleteButton from "./components/AccountDeleteButton";

function Profile() {
  // For layout testing
  const user = {
    name: "Jared Hammond",
    email: "jared@jared.com",
    membership_level: "Member",
  };

  return (
    <>
      <Header isLoggedIn={true} />
      {/* <ProfileUser user={user} /> */}
      <UserInput
        type='text'
        label='Enter secret password to become a member:'
        name='member_secret'
      />
      {/* <AccountDeleteButton user /> */}
    </>
  );
}

export default Profile;


