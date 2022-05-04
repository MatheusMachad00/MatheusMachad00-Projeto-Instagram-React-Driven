import ReactDOM from "react-dom";
import Navbar from "./navbar/Navbar.jsx";
import Corpo from "./corpo/Corpo.jsx";
import Fundo_mobile from "./footer/Fundo_mobile.jsx";

function App() {
    return (
        <><Navbar /><Corpo /><Fundo_mobile /></>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));