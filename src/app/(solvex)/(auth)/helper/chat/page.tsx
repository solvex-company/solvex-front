"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

type Message = {
  user: {
    name: string;
    role: string; 
  };
  content: string;
};

function EmployeeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = user.token;

    if (!token) return;

    socket = io("http://localhost:4000", {
      auth: { token },
    });

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("onMessage", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("newMessage", input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Sala de Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          height: "500px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, idx) => (
          <p key={idx} className="border-1 border-accent rounded-lg p-1 pl-2 pr-2">
            <strong className={msg.user.role === 'empleado' ? 'bg-accent' : 'bg-inputBg' }>
              {msg.user.name} ({msg.user.role}):
            </strong>{" "}
            {msg.content}
          </p>
        ))}
      </div>
      <div className="flex w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un mensaje..."
          className="mt-3 mr-3 w-full h-[40px] bg-mainBg border border-accent rounded-lg p-1 pl-3 pr-3"
        />
        <button 
          onClick={sendMessage}
          className="mt-3 p-1 pl-3 pr-3 w-fit h-[40px] bg-accent text-2xl text-white rounded-lg hover:bg-secondBg">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default EmployeeChat;