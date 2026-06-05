import Header from "./components/Header";
import AttendeeList from "./components/AttendeeList";
import SessionList from "./components/SessionList";
import "./styles/App.css";

function App() { 
    return (
        <>
            <div>
                <h1>Conference Dashboard</h1>

                <Header />
                <AttendeeList />
                <SessionList />
            </div>
        </>
    );
}

export default App;