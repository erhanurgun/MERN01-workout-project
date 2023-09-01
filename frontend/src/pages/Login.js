import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 align="center">Giriş Yap</h3>
      <label>e-posta:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="lütfen e-posta adresinizi giriniz!"
      />
      <label>şifre:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="lütfen şifrenizi giriniz!"
      />

      <button disabled={isLoading}>Giriş Yap</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
