function ProfileUser(props) {
  const { name, username, memberLevel } = props;

  return (
    <section className="card">
      <h3>Name</h3>
      <p>{name}</p>

      <h3>Username</h3>
      <p>{username}</p>

      <h3>User Level</h3>
      <p>{memberLevel}</p>
    </section>
  );
}

export default ProfileUser;
