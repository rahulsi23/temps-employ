import React from "react";
import { ChatBox, ChatList } from "./sub-component";

const Chat = () => {
  return (
    <>
      <main>
       <section className="chat-section">
        <div className="container">
        <div className="card chat-card">
          <div className="chat-main">
            <div className="chat-lftsec">
              <ChatList />
            </div>
            <div className="chat-rgtsec">
              <ChatBox />
            </div>
          </div>
        </div>
        </div>
       </section>
      </main>
    </>
  );
};

export default Chat;
