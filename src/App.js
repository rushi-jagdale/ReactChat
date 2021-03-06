import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
     <ChatEngine
    height="100vh"
    projectID="a463e2f3-6a8d-4b1d-9759-fdc237347372"
    userName="Rushi"
    userSecret="1234" 
    renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} /> } 
    >
            
     </ChatEngine>
    </div>
  );
}

export default App;
