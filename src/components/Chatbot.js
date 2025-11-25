import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Ask me anything about the MERN stack (MongoDB, Express, React, Node.js). I can help with basics, functions, promises, hooks, and more!', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const responses = {
    // MERN Basics
    'what is mern': 'MERN is a full-stack JavaScript framework consisting of MongoDB (database), Express.js (backend), React.js (frontend), and Node.js (server). It allows building complete web applications using only JavaScript.',
    'what is mongodb': 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It\'s schema-less and great for handling large amounts of unstructured data.',
    'what is express': 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing, middleware, and HTTP handling.',
    'what is react': 'React is a JavaScript library for building user interfaces, particularly for single-page applications. It uses components to create reusable UI elements.',
    'what is node': 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing you to run JavaScript on the server side. It\'s asynchronous and event-driven.',

    // MongoDB
    'how to connect mongodb': 'Use Mongoose: const mongoose = require(\'mongoose\'); mongoose.connect(\'mongodb://localhost:27017/yourdb\').then(() => console.log(\'Connected!\')).catch(err => console.error(err));',
    'mongodb schema': 'In MongoDB, schemas are defined using Mongoose: const userSchema = new mongoose.Schema({ name: String, email: String }); const User = mongoose.model(\'User\', userSchema);',
    'mongodb crud': 'CRUD operations: Create: User.create({name, email}); Read: User.find(); Update: User.findByIdAndUpdate(id, {name}); Delete: User.findByIdAndDelete(id);',

    // Express.js
    'express routing': 'Routing in Express: app.get(\'/users\', (req, res) => { res.json(users); }); app.post(\'/users\', (req, res) => { /* create user */ });',
    'express middleware': 'Middleware functions: app.use(express.json()); app.use(cors()); Custom: app.use((req, res, next) => { console.log(req.path); next(); });',
    'express server setup': 'const express = require(\'express\'); const app = express(); app.use(express.json()); app.listen(3000, () => console.log(\'Server running on port 3000\'));',

    // React
    'react component': 'Functional component: const MyComponent = () => { return <div>Hello World</div>; }; Class component: class MyComponent extends React.Component { render() { return <div>Hello</div>; } }',
    'react hooks': 'Common hooks: useState for state, useEffect for side effects, useContext for context, useReducer for complex state, useRef for DOM refs.',
    'usestate': 'useState hook: const [count, setCount] = useState(0); setCount(count + 1); It manages local component state.',
    'useeffect': 'useEffect hook: useEffect(() => { /* side effect */ return () => /* cleanup */; }, [dependencies]); Runs after render.',
    'usecontext': 'useContext hook: const value = useContext(MyContext); Accesses context values without prop drilling.',
    'usereducer': 'useReducer hook: const [state, dispatch] = useReducer(reducer, initialState); For complex state logic, similar to Redux.',
    'useref': 'useRef hook: const inputRef = useRef(); inputRef.current.focus(); Creates mutable refs to DOM elements.',

    // Node.js
    'node modules': 'Common modules: fs for file system, path for paths, http for servers, crypto for encryption, events for event handling.',
    'node promises': 'Promises: const promise = new Promise((resolve, reject) => { /* async code */ }); promise.then(result => {}).catch(error => {});',
    'node async await': 'Async/await: async function myFunc() { try { const result = await someAsyncFunction(); } catch (error) { /* handle error */ } }',
    'node fs': 'File system: const fs = require(\'fs\'); fs.readFile(\'file.txt\', \'utf8\', (err, data) => { if (err) throw err; console.log(data); });',
    'node http server': 'HTTP server: const http = require(\'http\'); const server = http.createServer((req, res) => { res.end(\'Hello World\'); }); server.listen(3000);',

    // General JavaScript
    'javascript promises': 'Promises represent async operations: const promise = fetch(\'api/data\'); promise.then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));',
    'javascript async await': 'Async/await syntax: async function fetchData() { try { const response = await fetch(\'api/data\'); const data = await response.json(); return data; } catch (error) { console.error(error); } }',
    'javascript functions': 'Function types: Function declaration: function myFunc() {}; Arrow function: const myFunc = () => {}; Anonymous function: (function() {})();',
    'javascript closures': 'Closures: A function that remembers variables from its outer scope even after the outer function has finished executing.',
    'javascript prototypes': 'Prototypes: Every object has a prototype. Inheritance: Child.prototype = Object.create(Parent.prototype);',

    'default': 'I\'m sorry, I don\'t have specific information on that. Try asking about MERN stack basics, React hooks, Node.js functions, or JavaScript concepts!'
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setIsTyping(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input })
        });

        const data = await response.json();

        if (response.ok && data.response) {
          const botMessage = { text: data.response, sender: 'bot' };
          setMessages(prev => [...prev, botMessage]);
        } else {
          const errorMessage = { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' };
          setMessages(prev => [...prev, errorMessage]);
        }
      } catch (error) {
        console.error('Error calling chat API:', error);
        const errorMessage = { text: 'Sorry, I encountered an error connecting to the AI service. Please try again.', sender: 'bot' };
        setMessages(prev => [...prev, errorMessage]);
      }

      setIsTyping(false);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={{
      padding: '15px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      color: 'white'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>MERN Stack AI Assistant</h3>
        <div style={{
          color: '#4ade80',
          fontSize: '12px',
          fontWeight: '500',
          background: 'rgba(74, 222, 128, 0.2)',
          padding: '4px 8px',
          borderRadius: '10px'
        }}>Online</div>
      </div>
      <div style={{
        height: '250px',
        overflowY: 'auto',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '15px',
        backdropFilter: 'blur(10px)'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: '18px',
              fontSize: '14px',
              lineHeight: '1.4',
              wordWrap: 'break-word',
              backgroundColor: msg.sender === 'user' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
              color: msg.sender === 'user' ? '#333' : 'white',
              borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
              borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '18px',
              boxShadow: msg.sender === 'user' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: '18px',
              fontSize: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ccc',
              borderBottomLeftRadius: '4px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ccc',
                animation: 'typing 1.4s infinite ease-in-out'
              }}></span>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ccc',
                animation: 'typing 1.4s infinite ease-in-out 0.2s'
              }}></span>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ccc',
                animation: 'typing 1.4s infinite ease-in-out 0.4s'
              }}></span>
            </div>
          </div>
        )}
      </div>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about MERN stack..."
          style={{
            flex: 1,
            padding: '12px 16px',
            border: 'none',
            borderRadius: '25px',
            background: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)'}
          onBlur={(e) => e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '12px 20px',
            border: 'none',
            borderRadius: '25px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
          }}
        >
          Send
        </button>
      </div>
      <style>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
