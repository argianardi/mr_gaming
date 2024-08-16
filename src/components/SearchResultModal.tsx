import { GameServiceType } from '@/types/GameServicesType';
import Link from 'next/link';

const SearchResultsModal = ({ results }: { results: GameServiceType[] }) => {
  return (
    <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
      {results.length > 0 ? (
        results.map((result, index) => (
          <Link
            key={index}
            href={`/service/${encodeURIComponent(result.name.toLowerCase())}`}
            className="flex items-center gap-4 p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <img
              src={result.imageUrl}
              alt={result.name}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="text-gray-700 font-medium">{result.name}</span>
          </Link>
        ))
      ) : (
        <div className="p-4 text-gray-500 text-center">
          Tidak ada hasil yang ditemukan.
        </div>
      )}
    </div>
  );
};

export default SearchResultsModal;
