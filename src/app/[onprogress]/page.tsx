import CountdownRedirect from '@/components/CountdownRedirect';
import { formatPageTitle } from '@/utils/pageTitleFormat';
import { FaTools } from 'react-icons/fa';

export async function generateMetadata({
  params,
}: {
  params: { onprogress: string };
}) {
  const decodedTitle = decodeURIComponent(params.onprogress);
  const pageTitle = decodedTitle
    .split(/[- ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: pageTitle || 'Under Development',
    description: 'Halaman ini sedang dalam proses pengembangan.',
  };
}

const OnprogressPage = ({ params }: { params: { onprogress: string } }) => {
  const pageTitle = formatPageTitle(params.onprogress);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 max-w-3xl mx-auto">
      <FaTools className="text-red-600 text-6xl sm:text-8xl md:text-9xl lg:text-10xl mb-4" />
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-red-600 mb-4 font-BreeSerif">
        Halaman <span className="text-blue-600 underline">{pageTitle}</span>{' '}
        Sedang Dalam Proses Development
      </h1>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 font-NotoSans">
        Harap bersabar dan cek kembali nanti!
      </p>
      <CountdownRedirect redirectTo="/" countdownStart={8} />
    </div>
  );
};

export default OnprogressPage;
