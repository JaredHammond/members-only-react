import ProfileUser from "../components/ProfileUser";
import Button from "../components/Button";
import { useUserAuth } from "../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";

function DeleteUser() {
  const { user, logoutUser } = useUserAuth();
  const navigate = useNavigate();

  function handleDeleteAccount() {
    fetch(`${process.env.REACT_APP_API_URI}/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    })
    .then(response => {
      if (response.status === 200) {
        logoutUser();
        navigate("/");
      }
    })
  }

  return (
    <>
      <section className="card">
        <h1>Delete Account</h1>
        <p>Are you sure you want to delete your account? This cannot be undone.</p>
      </section>

      <ProfileUser
        name={user.first_name + ' ' + user.family_name}
        username={user.username}
        memberLevel={user.membership_level}
      />
      <Button 
        text="Confirm Delete Account"
        onClick={handleDeleteAccount}
      />
    </>
  )
}

export default DeleteUser;