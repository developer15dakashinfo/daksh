import { useState } from "react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulating a bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Hello! How can I help you?", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      className="fixed flex flex-col items-end z-[100] b-[80px];
	l-[40px]"
    >
      {isOpen && (
        <div className="flex-1 mt-16 mr-4 w-96 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-700 h-16 rounded-t-lg flex items-center px-4 text-white font-semibold">
            Chat with Us
          </div>
          <div className="flex flex-col overflow-y-auto h-64 p-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-white max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-600 self-end"
                    : "bg-gray-500 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center bg-gray-100">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <div
        className="bg-blue-600 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          ></path>
        </svg>
      </div>
    </div>
  );
}
