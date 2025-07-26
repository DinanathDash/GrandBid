import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, Send, MessageCircle, X, Star, Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import wandIcon from "@/assets/wand.svg";

const ChatMessage = ({ message, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative p-3 mb-3 max-w-[85%] rounded-xl text-sm shadow-lg",
        isUser 
          ? "bg-gradient-to-r from-amber-600 to-orange-500 text-white ml-auto rounded-tr-none shadow-amber-500/20"
          : "bg-gradient-to-r from-slate-800 to-slate-700 text-gray-100 mr-auto rounded-tl-none border border-slate-600/30 shadow-slate-900/50"
      )}
    >
      {/* Magic sparkles around assistant messages */}
      {!isUser && (
        <>
          {/* Subtle glow effect for assistant messages */}
          <div className="absolute inset-0 rounded-xl bg-amber-400/5 blur-xl -z-10"></div>
        </>
      )}
      
      {/* User message styling */}
      {isUser && (
        <div className="absolute top-0 right-0 h-0 w-0 border-t-[8px] border-r-[8px] border-t-transparent border-r-orange-600"></div>
      )}
      
      {/* Assistant message styling */}
      {!isUser && (
        <div className="absolute top-0 left-0 h-0 w-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-slate-800"></div>
      )}
      
      <p className="relative z-10">{message.text}</p>
    </motion.div>
  );
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "✨ Greetings, esteemed wizard! Welcome to the Grand Bid Wizarding Auction. How may I assist with your magical inquiries today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to the most recent message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Complete Q&A database - frontend only implementation
  const qaDatabase = [
    // General Questions
    { 
      question: ["what is grand bid", "tell me about grandbid", "what's this site about", "what is this website", "what do you do", "what is this platform"],
      answer: "✨ Grand Bid is a magical auction platform where team organizers can bid on talented wizards to build their dream magical teams! It's inspired by the wizarding world and brings the excitement of fantasy auctions to life."
    },
    {
      question: ["how does the auction work", "auction process", "bidding process", "how to bid", "explain the auction"],
      answer: "🧙‍♂️ The auction works in rounds where team owners bid galleons from their budget (1000 galleons) to secure talented wizards. When a player is nominated, the bidding begins and the highest bidder secures that wizard for their team!"
    },
    {
      question: ["what roles are there", "different roles", "types of users", "user roles"],
      answer: "🏆 There are three magical roles in Grand Bid: Players (the talented wizards being auctioned), Bidders (team owners with budgets), and Organizers (who manage the auction proceedings)."
    },
    
    // Player Questions
    {
      question: ["how to register as player", "become a player", "player registration", "join as player", "player signup"],
      answer: "⚡ To register as a player, click on 'Enter the Auction' and select 'Player' role. You'll need to provide your magical abilities, preferred position, and achievements for teams to evaluate your talents!"
    },
    {
      question: ["player benefits", "why become a player", "what do players get", "player advantages"],
      answer: "🪄 As a player, you'll gain visibility to prestigious magical teams, build your wizarding reputation, and potentially secure lucrative contracts. Players also receive magical credentials verified by the Ministry!"
    },
    
    // Bidder Questions
    {
      question: ["how to register as bidder", "become a bidder", "bidder registration", "join as bidder", "team owner registration"],
      answer: "To become a bidder, select 'Enter the Auction' and choose the 'Bidder' role. You'll receive 1000 galleons of auction currency to build your magical dream team!"
    },
    {
      question: ["bidder strategy", "how to bid effectively", "bidding tips", "auction strategy", "successful bidding"],
      answer: "📜 Effective bidding requires strategic planning! Research players beforehand, set maximum bid limits, save some galleons for later rounds, and don't get caught in bidding wars unless the wizard is truly exceptional for your team."
    },
    {
      question: ["budget", "how much money", "bidding budget", "starting budget", "galleons"],
      answer: "💰 All bidders start with exactly 1000 galleons in their vault. Use it wisely across all auction rounds to assemble your magical roster. The budget cannot be increased during the event!"
    },
    
    // Organizer Questions
    {
      question: ["become an organizer", "organizer role", "run an auction", "host auction", "auction management"],
      answer: "🏰 Organizers must apply through special channels. They oversee the entire auction process, validate player credentials, enforce house rules, and ensure a fair bidding environment for all participants."
    },
    
    // Technical Questions
    {
      question: ["auction timing", "when is the auction", "auction schedule", "event date", "start time"],
      answer: "⏳ Auctions are scheduled through the Magical Timekeeper. Once registered, you'll receive an official owl with your specific auction date and time. Be sure not to be late - the Timekeeper waits for no wizard!"
    },
    {
      question: ["technical issues", "problems with site", "site not working", "need help", "support", "contact"],
      answer: "🔮 If you're experiencing enchantment disruptions, please send an owl to support@grandbid.magic or wave your wand in the special pattern detailed in our Magical Terms section. Our technical wizards will assist promptly!"
    },
    
    // Rules and Policies
    {
      question: ["rules", "auction rules", "house rules", "policies", "terms and conditions", "guidelines"],
      answer: "📖 Our House Rules are binding magical contracts! They ensure fair play, prevent magical tampering, and maintain the integrity of the auction. Visit our House Rules page for the complete scroll of regulations."
    },
    {
      question: ["privacy", "data security", "my information", "data protection", "privacy policy"],
      answer: "🔐 Your magical secrets are protected by powerful enchantments! We use advanced magical barriers to protect all participant data. For details on our privacy enchantments, visit our Privacy Enchantments page."
    },
    
    // Fallback response for unknown questions
    {
      question: ["fallback"],
      answer: "I'm still learning the ancient arts of answering every question! Perhaps try asking about Grand Bid auctions, player registration, bidding strategies, or our magical rules in a different way?"
    }
  ];
  
  // Function to find the best matching answer
  const findAnswer = (userInput) => {
    // Convert to lowercase for matching
    const input = userInput.toLowerCase();
    
    // Check each QA pair
    for (const qa of qaDatabase) {
      // Check if any question patterns match
      for (const question of qa.question) {
        if (input.includes(question)) {
          return qa.answer;
        }
      }
    }
    
    // Return fallback answer if no match found
    return qaDatabase.find(qa => qa.question.includes("fallback")).answer;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Find the appropriate answer based on user input
    const responseText = findAnswer(input);
    
    // Simulate typing delay for natural feel (adjust time based on response length)
    const typingDelay = Math.min(1500, Math.max(800, responseText.length * 10));
    
    setTimeout(() => {
      const botMessage = { text: responseText, isUser: false };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button with pulsing effect */}
      <Button
        variant="magical"
        size="icon"
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-40 hover:scale-110 transition-all duration-300 ${!isOpen && "animate-chat-pulse"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative"
            >
              <MessageCircle className="h-5 w-5 text-white absolute" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Magical shimmer effect */}
        <div className="absolute inset-0 rounded-full animate-magical-shimmer"></div>
      </Button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-black/80 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-xl overflow-hidden z-30 flex flex-col"
            style={{
              boxShadow: "0 0 20px 0 rgba(251, 191, 36, 0.2), 0 0 30px 0 rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Chat header */}
            <div className="p-4 border-b border-amber-500/20 bg-gradient-to-r from-slate-900 to-slate-800 relative">
              {/* Magical header accent */}
              <div className="absolute h-[1px] bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center relative overflow-hidden group">
                    <Wand2 className="h-5 w-5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-400/30 to-amber-600/0 animate-magical-shimmer"></div>
                  </div>
                  <span className="absolute h-3 w-3 bg-green-500 border-2 border-slate-800 rounded-full bottom-0 right-0"></span>
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-amber-400">Magical Assistant</h3>
                  <p className="text-xs text-slate-400">Here to help with your bidding journey</p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-none bg-gradient-to-b from-slate-900/50 to-black/50">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} isUser={message.isUser} />
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-slate-800 to-slate-700 text-gray-100 p-3 rounded-xl max-w-[85%] mr-auto rounded-tl-none border border-slate-600/30 flex gap-1 items-center relative"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </motion.div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Input area with magical border accent */}
            <div className="p-4 border-t border-amber-500/20 bg-gradient-to-r from-slate-900 to-slate-800 relative">
              {/* Magical header accent */}
              <div className="absolute h-[1px] top-0 left-0 right-0 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              
              <div className="flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask your magical question..."
                  className="min-h-[44px] max-h-[120px] flex-1 bg-slate-800/80 border-amber-500/30 focus-visible:border-amber-400/50 resize-none text-slate-200 placeholder:text-slate-500"
                />
                <Button 
                  variant="magical"
                  size="icon"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="h-10 w-10 relative overflow-hidden group"
                >
                  <Send className="h-4 w-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  
                  {/* Magical shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
