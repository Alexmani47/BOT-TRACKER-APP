import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BotPerformance({ bots, setBots }) {
  const { id } = useParams();
  const bot = bots.find(b => b.id === id);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    result: 'Profit',
    amount: '',
  });

  if (!bot) return <p>Bot not found.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerformance = {
      ...formData,
      amount: parseFloat(formData.amount)
    };

    const updatedBot = {
      ...bot,
      performance: [...(bot.performance || []), newPerformance]
    };

    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBot)
    })
      .then(res => res.json())
      .then(updated => {
        setBots(prev => prev.map(b => b.id === updated.id ? updated : b));
        setFormData({ date: '', time: '', result: 'Profit', amount: '' });
      });
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Add Performance for {bot.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Record
        </button>
      </form>

      {bot.performance && bot.performance.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Performance History</h3>
          <ul className="space-y-1">
            {bot.performance.map((perf, index) => (
              <li key={index} className="border p-2 bg-gray-50 rounded">
                {perf.date} at {perf.time} — {perf.result} of ${perf.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
