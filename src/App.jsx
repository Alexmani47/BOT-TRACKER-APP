import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./assets/NavBar";
import BotList from "./assets/BotList";
import BotForm from "./assets/BotForm";
import BotDetail from "./assets/BotDetail";
import SearchBar from "./assets/SearchBar";
import SummaryCard from "./assets/SummaryCard";
import BotPerformance from "./assets/BotPerformance";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(setBots)
      .catch(err => console.error("Failed to fetch bots:", err));
  }, []);

  const addBot = (newBot) => setBots(prev => [...prev, newBot]);

  const deleteBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setBots(prev => prev.filter(bot => bot.id !== id));
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-200 text-gray-900">
        <NavBar />

        <main className="flex-grow p-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BotList
                  bots={bots}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  deleteBot={deleteBot}
                />
              </div>
            } />

            <Route path="/add" element={
              <div className="w-full">
                <BotForm onAddBot={addBot} />
              </div>
            } />

            <Route path="/bot/:id" element={
              <div className="w-full">
                <BotDetail bots={bots} />
              </div>
            } />

            <Route path="/summary" element={
              <div className="w-full">
                <SummaryCard bots={bots} />
              </div>
            } />

            <Route path="/bot/:id/performance" element={
              <div className="w-full">
                <BotPerformance bots={bots} setBots={setBots} />
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-gray-300 text-center py-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Bot Tracker. All rights reserved.</p>
        </footer>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
