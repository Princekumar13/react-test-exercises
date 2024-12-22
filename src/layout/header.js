import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="App-header d-flex align-itema-center">
            <div className="App-link me-3" onClick={() => navigate("/")}>Exercise 1</div>
            <div className="App-link" onClick={() => navigate("/exercise-two")}>Exercise 2</div>
        </header>
    )
}

export default Header;