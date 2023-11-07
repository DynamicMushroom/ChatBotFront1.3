import { useState } from 'react';
import './App.css';

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://eager-battledress-yak.cyclic.app/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ 'user_input': userInput }),
        });

        const responseData = await response.json();
        setChatHistory([...chatHistory, { who: 'User', text: userInput }, { who: 'Bot', text: responseData.response }]);
        setUserInput('');
    };

    return (
        <div className="App">
            <div className="chat-container">
                {chatHistory.map((entry, index) => (
                    <div key={index} className={entry.who}>{entry.text}</div>

                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;