import { useState } from "react";
import "../styles/SpeakerCard.css";

function SpeakerCard({ speaker }) {
    const [available, setAvailable] = useState(speaker.available);

    return (
        <div className="speaker-card">
            <h3>{speaker.name}</h3>
            <p className="speaker-topic">🎤 {speaker.topic}</p>
            <p className="speaker-bio">{speaker.bio}</p>
            <p className="speaker-availability">
                {available ? (
                    <span className="status-available">✅ Available for Q&A</span>
                ) : (
                    <span className="status-unavailable">❌ Unavailable</span>
                )}
            </p>
            <button
                className={`speaker-button ${available ? "available-button" : "unavailable-button"}`}
                onClick={() => setAvailable(!available)}
            >
                {available ? "Mark Unavailable" : "Mark Available"}
            </button>
        </div>
    );
}

export default SpeakerCard;
