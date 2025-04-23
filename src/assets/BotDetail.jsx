import { useParams } from 'react-router-dom';

export default function BotDetail({ bots }) {
  const { id } = useParams();

  // Wait until bots are loaded
  if (!bots.length) return <div className="text-center text-gray-500">Loading bot data...</div>;

  const bot = bots.find(b => b.id === id);

  console.log("Selected bot:", bot);

  if (!bot) return <div className="text-center text-red-500">Bot not found</div>;

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{bot.name}</h2>
      <p><strong>Status:</strong> {bot.status || "N/A"}</p>
      <p><strong>Strategy:</strong> {bot.strategy || "N/A"}</p>
      <p><strong>Result:</strong> {bot.result || "N/A"}</p>
      <p><strong>Amount:</strong> ${bot.amount ?? "N/A"}</p>
      <p><strong>Date:</strong> {bot.timestamp ? new Date(bot.timestamp).toLocaleString() : "N/A"}</p>
    </div>
  );
}
