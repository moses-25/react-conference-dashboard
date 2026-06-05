import { useState } from "react";
import "../styles/SessionList.css";

function SessionList() {
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: "React Fundamentals",
            room: "room A",
            time: "9:00AM",
            Registration: false 
        },
        {
            id: 2,
            title: "Vue Fundamentals",
            room: "room B",
            time: "10:00AM",
            Registration: false 
        },
        {
            id: 3,
            title: "Angular Fundamentals",
            room: "room C",
            time: "11:00AM",
            Registration: false 
        }   
    ]);

    const handleRegistration = (id) => {
        const updatedSessions = sessions.map((session) => 
            session.id === id ? { ...session, Registration: !session.Registration } : session
        );
        setSessions(updatedSessions);
    };

    return (
        <section className="session-list">
            <h2 className="session-title">Upcoming Sessions</h2>
            
            {sessions.map((session) => (
                <div
                    key={session.id}
                    className="session-card"
                >
                    <h3>{session.title}</h3>

                    <p> 📍{session.room}</p>

                    <p> 🕒{session.time}</p>

                    <button
                        className={session.Registration
                            ? "registered-session-btn"
                            : "register-session-btn"
                        }
                        onClick={() => handleRegistration(session.id)}
                    >
                        {session.Registration ? "Unregister" : "Register"}
                    </button>
                </div>
            ))}
        </section>
    );
}

export default SessionList;