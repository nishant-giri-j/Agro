import React, { useState, useRef, useEffect } from "react";
import { SendHorizonal, MessageCircle } from "lucide-react";
import agro from "../assets/agro.png";
import faqData from "../data/faqData"; // Import FAQ data
import { sendChatMessage } from "../api/chat";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I’m Agro Assistant 🌱 How can I support you today?",
      type: "bot",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatRef = useRef(null);

  const wordLimit = 500;

  const limitWords = (text) => {
    const words = text.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input.trim(), type: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon"];
    if (greetings.some((greet) => input.trim().toLowerCase().includes(greet))) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Hello! I’m Agro Assistant 🌾 Here to help with farming advice, crop info, and more!",
          type: "bot",
        },
      ]);
      setLoading(false);
      return;
    }

    const faqAnswer = faqData.find(
      (faq) => faq.question.toLowerCase() === input.trim().toLowerCase()
    );

    if (faqAnswer) {
      setMessages((prev) => [
        ...prev,
        { text: limitWords(faqAnswer.answer), type: "bot" },
      ]);
      setLoading(false);
    } else {
      try {
        const { reply } = await sendChatMessage(input.trim());
        if (reply) {
          setMessages((prev) => [
            ...prev,
            { text: limitWords(reply), type: "bot" },
          ]);
        } else {
          throw new Error("No response received from the AI service");
        }
      } catch (error) {
        console.error("API Error:", error);
        setError(error.message);
        setMessages((prev) => [
          ...prev,
          {
            text: error.message.includes("Failed to fetch")
              ? "Hmm... I couldn't connect. Please check your internet connection."
              : error.message.includes("quota")
                ? "My service is temporarily unavailable. Please try again soon."
                : "Oops! I ran into a problem. Please try again in a moment.",
            type: "bot",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg text-white flex items-center justify-center transition duration-300"
          aria-label="Open chat"
        >
          <MessageCircle size={32} />
        </button>
      )}

      {isOpen && (
        <div className="w-[95vw] sm:w-[360px] h-[75vh] flex flex-col border border-blue-300 rounded-2xl shadow-2xl bg-gradient-to-t from-blue-100 to-blue-50 overflow-hidden transition-all duration-500 ease-in-out">
          <div className="bg-blue-600 text-white px-6 py-4 font-semibold text-lg flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <img
                src={agro}
                alt="Agro"
                className="h-8 w-8 object-contain"
              />
              Agro Assistant
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg hover:text-blue-200"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-blue-50" ref={chatRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl max-w-[80%] text-sm md:text-base ${
                  msg.type === "user"
                    ? "bg-blue-200 self-end ml-auto text-right"
                    : "bg-white shadow-md text-left"
                }`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            {loading && (
              <div className="flex items-center text-blue-500 text-sm">
                <div className="animate-pulse mr-2">Typing...</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-sm mt-2">
                Error: {error}
              </div>
            )}
          </div>

          <div className="flex p-4 bg-white border-t border-blue-300">
            <input
              className="flex-1 px-4 py-3 rounded-xl border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask about crops, diseases, weather..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`ml-2 p-3 rounded-xl transition ${
                loading || !input.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              <SendHorizonal size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
