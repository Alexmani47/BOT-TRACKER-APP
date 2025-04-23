export default function SummaryCard({ bots }) {
    const total = bots.reduce((acc, bot) => acc + bot.amount, 0);
    const profitBots = bots.filter(bot => bot.result === 'Profit');
    const lossBots = bots.filter(bot => bot.result === 'Loss');
  
    return (
      <div className="bg-white p-6 rounded-md shadow-md space-y-4">
        <h2 className="text-xl font-bold">Weekly Summary</h2>
        <p><strong>Total Trades:</strong> {bots.length}</p>
        <p className="text-green-600"><strong>Profits:</strong> {profitBots.length}</p>
        <p className="text-red-500"><strong>Losses:</strong> {lossBots.length}</p>
        <p><strong>Net Result:</strong> ${total.toFixed(2)}</p>
      </div>
    );
  }
  