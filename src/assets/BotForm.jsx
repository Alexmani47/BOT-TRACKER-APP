import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BotForm({ onAddBot }) {
  const [formData, setFormData] = useState({
    name: '',
    strategy: '',
    status: 'Active',
    result: 'Profit',
    amount: '',
  });

  const navigate = useNavigate(); 

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBot = {
      ...formData,
      amount: parseFloat(formData.amount),
      timestamp: new Date().toISOString()
    };

    fetch('https://bot-tracker-app-2.onrender.com/bots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBot)
    })
      .then(res => res.json())
      .then(data => {
        onAddBot(data); 
        setFormData({
          name: '',
          strategy: '',
          status: 'Active',
          result: 'Profit',
          amount: '',
        });
        navigate('/'); 
      });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Add New Bot</h2>

      <input
        type="text"
        name="name"
        placeholder="Bot Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <input
        type="text"
        name="strategy"
        placeholder="Strategy"
        value={formData.strategy}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option value="Active">Active</option>
        <option value="Paused">Paused</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select
        name="result"
        value={formData.result}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option value="Profit">Profit</option>
        <option value="Loss">Loss</option>
      </select>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Bot
      </button>
    </form>
  );
}
