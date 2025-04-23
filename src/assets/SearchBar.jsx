export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or strategy..."
        className="w-full p-2 border rounded shadow-sm"
      />
    );
  }
  