import ProfileUser from "../components/ProfileUser";
import UserInput from "../components/UserInput";
import Button from "../components/Button";
import { useUserAuth } from "../hooks/useUserAuth";

function Profile() {
  const { user } = useUserAuth();

  return (
    <>
      <ProfileUser
        name={user?.first_name + ' ' + user?.family_name || ''}
        username={user?.username || ''}
        memberLevel={user?.membership_level || ''}
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
    </>
  );
}

export default Profile;
