import ProfileUser from "../components/ProfileUser";
import Button from "../components/Button";
import { useUserAuth } from "../hooks/useUserAuth";

function DeleteUser() {
  const { user } = useUserAuth();

  return (
    <>
      <ProfileUser
        name={user.first_name + ' ' + user.family_name}
        username={user.username}
        memberLevel={user.membership_level}
      />
      <Button />
    </>
  )
}

export default DeleteUser;