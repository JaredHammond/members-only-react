import ProfileUser from "../components/ProfileUser";
import UserInput from "../components/UserInput";
import Button from "../components/Button";
import ErrorDisplay from "../components/ErrorDisplay";
import { useUserAuth } from "../hooks/useUserAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, updateUser } = useUserAuth();
  const navigate = useNavigate();

  const [validationErrs, setValidationErrs] = useState([]);
  const [secretForm, setSecretForm] = useState('')
  let token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  })

  async function handleSecretSubmit() {
    let secretLevel;
    token = localStorage.getItem("token");

    if (user.is_member) {
      secretLevel = 'admin'
    } else {
      secretLevel = 'member'
    }

    const response = await fetch(`${process.env.REACT_APP_API_URI}user`, {
      method: "PATCH",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        userLevel: secretLevel,
        secret: secretForm
      })
    });
    const data = await response.json();
    
    if (data.code !== 200) {
      setValidationErrs(data.messages);
      setSecretForm('');
      return;
    }

    setValidationErrs([]);
    setSecretForm('');
    updateUser(data.user);
    localStorage.setItem("token", data.token);
  }


  function handleSecretFormChange(e) {
    const value = e.target.value;
    setSecretForm(value);
  }



  return (
    <>
      <ProfileUser
        name={user?.first_name + ' ' + user?.family_name || ''}
        username={user?.username || ''}
        memberLevel={user?.membership_level || ''}
      />
      <ErrorDisplay errors={validationErrs} />

      { user?.membership_level === "Non-Member" &&
        <UserInput
        type="password"
        label="Enter secret password to become a member:"
        name="member_secret"
        placeholder="Enter secret..."
        value={secretForm}
        onChange={handleSecretFormChange}
      />
      }

      { user?.membership_level === "Member" &&
        <UserInput
        type="password"
        label="Enter secret password to become an Admin:"
        name="admin_secret"
        placeholder="Enter secret..."
        value={secretForm}
        onChange={handleSecretFormChange}
      />
      }
      {!user?.is_admin && <Button text="Submit Secret" onClick={handleSecretSubmit} />}


      <h3>Delete Account</h3>
      <Button
        text="Delete Account"
        onClick={() => navigate('/user/delete/')}
      />
    </>
  );
}

export default Profile;
