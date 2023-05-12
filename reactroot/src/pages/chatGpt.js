import { useState } from "react"
import { Configuration, OpenAIApi } from "openai";
import './chatGpt.css';

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const ChatGpt = () => {
    const [request, setRequest] = useState('')
    const [response, setResponse] = useState({})   
    async function chatGptRequest() {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: request }],
        });
        console.log(completion)
        setResponse(completion.data.choices[0].message)
    }
    return (
        <>
            <h1>ChatGpt</h1>
            <form onSubmit={chatGptRequest}>
                <input
                    type="text"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>            
          <p>{response.role}:</p>
          <p>{response.content}</p>       
        </>
    )
}

export default ChatGpt;