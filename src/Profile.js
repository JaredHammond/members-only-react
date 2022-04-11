import Header from "./components/Header";
import ProfileUser from "./components/ProfileUser";
import UserLevelUpgradeInput from "./components/UserLevelUpgradeInput";
import AccountDeleteButton from "./components/AccountDeleteButton";

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
      <ProfileUser user={user} />
      <UserLevelUpgradeInput user={user} />
      <AccountDeleteButton user />
    </>
  );
}

export default Profile;
