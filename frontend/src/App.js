import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useAuthContext} from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
    const {user} = useAuthContext();

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={user ? <Home/> : <Navigate to="/login"/>}
                        />
                        <Route
                            path="/login"
                            element={!user ? <Login/> : <Navigate to="/"/>}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup/> : <Navigate to="/"/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>

            <div className="powered-by">
                <span>Copyrigth © 2023. Tüm hakları saklıdır. </span>
                <a href="https://erhanurgun.com.tr" target="_blank" rel="noreferrer">
                    @erhanurgun
                </a>
                <span> tarafından geliştirilmiştir.</span>
            </div>
        </div>
    );
}

export default App;
