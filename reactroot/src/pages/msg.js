import { useState } from "react";
export default function Msg() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);

    return (
        <main>
            <ul>
                {messages.map((t) => (
                    <li className="message">
                        <div className="user">{t.user}</div>
                        <div className="text">{t.message}</div>
                    </li>
                ))}
            </ul>
            <footer>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="inserisci il tuo nome"
                    className="name"
                />
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="inserisci il messaggio"
                    className="msg"
                />
                <button
                    onClick={() => {
                        let newMessages = [...messages];
                        newMessages.push({ 'user': `${name}`, 'message': `${text}` });
                        setMessages(newMessages);
                        setText("");
                    }}
                >
                    invia
                </button>
            </footer>
        </main>
    );
}