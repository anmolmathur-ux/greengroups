import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const botReply = {
        sender: "bot",
        text: "Thanks! Our team will contact you shortly. 😊",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="
              w-80 h-[430px] backdrop-blur-xl bg-white/40 
              shadow-2xl rounded-2xl border border-white/30 
              flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-4 flex items-center gap-2 shadow-md">
              <div className="bg-white/30 p-2 rounded-full">
                <MessageSquare size={20} />
              </div>
              <p className="font-semibold text-lg tracking-wide">Support Chat</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex mb-3 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center mr-2">
                      🤖
                    </div>
                  )}

                  <div
                    className={`px-4 py-2 text-sm rounded-xl max-w-[70%] shadow 
                    ${
                      msg.sender === "user"
                        ? "bg-green-700 text-white rounded-br-none"
                        : "bg-white/90 text-gray-800 border rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Animation */}
              {typing && (
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center mr-2">
                    🤖
                  </div>

                  <div className="bg-white/90 border px-4 py-2 rounded-xl shadow">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white/70 backdrop-blur-lg border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 text-sm rounded-lg border bg-white/80 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Type a message..."
              />

              <button
                onClick={sendMessage}
                className="bg-green-700 hover:bg-green-800 text-white rounded-full p-3 transition shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="p-4 rounded-full shadow-2xl text-white 
                   bg-gradient-to-br from-green-600 to-green-700 
                   hover:from-green-700 hover:to-green-800
                   transition-all"
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={26} />
      </motion.button>
    </div>
  );
}
