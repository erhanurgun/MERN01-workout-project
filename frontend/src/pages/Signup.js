import {useState} from "react";
import {useSignup} from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    };

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3 align="center">Kayıt Ol</h3>

            <label>e-posta:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="ör: erhan@urgun.xyz"
            />
            <label>şifre:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="ör: i$0r*oQbOHyec%"
            />

            <button disabled={isLoading}>Kaydol</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Signup;
