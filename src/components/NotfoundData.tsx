import { FiSearch } from 'react-icons/fi';

const NotfoundData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="mb-4">
        <FiSearch className="w-16 h-16 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold text-gray-700">
        Data Tidak Ditemukan
      </h2>
      <p className="mt-2 text-gray-500">
        Maaf, kami tidak dapat menemukan hasil yang sesuai dengan pencarian
        Anda.
      </p>
    </div>
  );
};

export default NotfoundData;
