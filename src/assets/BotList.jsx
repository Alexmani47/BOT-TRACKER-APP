import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function BotList({ bots, searchQuery, setSearchQuery, deleteBot }) {
  const filteredBots = bots.filter(bot =>
    bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bot.strategy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid gap-4 mt-4">
        {filteredBots.map(bot => (
          <div key={bot.id} className="bg-white p-4 shadow rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{bot.name}</h3>
                <p className="text-gray-600">{bot.strategy}</p>
                <p className={`text-sm ${bot.result === 'Profit' ? 'text-green-500' : 'text-red-500'}`}>
                  {bot.result} ${bot.amount}
                </p>
              </div>
              <div className="space-x-2">
                <Link to={`/bot/${bot.id}`} className="text-blue-600 underline">Details</Link>
                <Link to={`/bot/${bot.id}/performance`} className="text-green-600 underline">Update</Link>
                <button onClick={() => deleteBot(bot.id)} className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
