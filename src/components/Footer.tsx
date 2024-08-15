import Image from 'next/image';
import Link from 'next/link';
import instagram from '../../public/medsos/instagram.png';
import facebook from '../../public/medsos/facebook.png';
import twitter from '../../public/medsos/twitter.png';
import tiktok from '../../public/medsos/tiktok.png';
import whatsapp from '../../public/medsos/whatsapp.png';
import BottomNavigation from './BottomNavigation';

const Footer = () => {
  const socMeds = [
    {
      name: 'instagram',
      source: instagram,
    },
    {
      name: 'facebook',
      source: facebook,
    },
    {
      name: 'twitter',
      source: twitter,
    },
    {
      name: 'tiktok',
      source: tiktok,
    },
    {
      name: 'whatsapp',
      source: whatsapp,
    },
  ];
  return (
    <footer className="px-2 lg:px-0">
      <div className="py-4 bg-[#cf5f00] mb-20 lg:mb-0 px-3 ">
        <div className="max-w-3xl lg:max-w-5xl mx-auto space-y-4 flex flex-col lg:flex-row lg:space-x-3">
          <div className="lg:w-3/6 ">
            <h4 className="mb-3 text-3xl text-base-100 font-BreeSerif font-light ">
              MR GAMING
            </h4>
            <p className="text-base leading-6 text-white font-NotoSans">
              MrGaming menyediakan layanan Top up game dan Afiliasi Voucher Game
              termurah dan terpercaya di Indonesia. Topup game online kesukaan
              kamu mudah aman tanpa registrasi, pembelian instan langsung masuk
              dalam hitungan detik.
            </p>
          </div>
          <div className="lg:w-1/6">
            <h4 className="text-2xl mb-3 text-base-100 font-BreeSerif font-light ">
              Bantuan
            </h4>
            <ul className="text-base text-white">
              <li>
                <Link href={'/metode-pembayaran'}>Metode Pembayaran</Link>
              </li>
              <li>
                <Link href={'/faq'}>FAQ</Link>
              </li>
              <li>
                <Link href={'/hubungai-kami'}>Hubungi Kami</Link>
              </li>
              <li>
                <Link href={'/kebijakan-layanan'}>Kebijakan Layanan</Link>
              </li>
              <li>
                <Link href={'/gabung-afiliasi'}>Gabung Afiliasi</Link>
              </li>
            </ul>
          </div>
          <div className="flex lg:w-2/6 items-center lg:justify-end space-x-2">
            {socMeds.map((socMed, index) => (
              <Image
                key={index}
                src={socMed.source}
                alt={socMed.name}
                width={42}
                height={42}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </footer>
  );
};

export default Footer;
