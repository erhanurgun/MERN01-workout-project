import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();

    const handleClick = () => {
        logout();
    };

    const renderAuthButtons = () => {
        if (user) {
            return (
                <div>
                    <span className="email">{user.email}</span>
                    <button className="btn-logout" onClick={handleClick}>Çıkış Yap</button>
                </div>
            );
        } else {
            const btnText = location.pathname === "/login" ? "Kaydol" : "Giriş Yap";
            const btnPath = location.pathname === "/login" ? "/signup" : "/login";

            return (
                <div className="btn">
                    <Link to={btnPath}>
                        <button>{btnText}</button>
                    </Link>
                </div>
            );
        }
    };

    return (
        <header className="fixed-header">
            <div className="container">
                <div className="head">
                    <Link to="/">
                        <h2 className="logo">Egzersiz Takip</h2>
                    </Link>
                </div>
                <div className="navbar">
                    <nav>
                        {renderAuthButtons()}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
