import "./login.scss";

export default function Index() {
  return (
    <div className="login">
      <label>
        <p>email</p>
        <input type="email" />
      </label>
      <label>
        <p>password</p>
        <input type="password" />
      </label>
    </div>
  );
}
