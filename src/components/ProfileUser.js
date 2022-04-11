function ProfileUser(props) {
  const { name, email, memberLevel } = props;

  return (
    <section className="card">
      <h3>Name</h3>
      <p>{name}</p>

      <h3>Email</h3>
      <p>{email}</p>

      <h3>User Level</h3>
      <p>{memberLevel}</p>
    </section>
  );
}

export default ProfileUser;
