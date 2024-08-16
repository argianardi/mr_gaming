'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CountdownRedirectProps {
  redirectTo: string;
  countdownStart: number;
}

const CountdownRedirect: React.FC<CountdownRedirectProps> = ({
  redirectTo,
  countdownStart,
}) => {
  const [countdown, setCountdown] = useState(countdownStart);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push(redirectTo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectTo, router]);

  return (
    <div className="text-lg text-gray-700 font-NotoSans">
      Anda akan dialihkan ke halaman{' '}
      <Link href={'/'} className="text-blue-600 underline font-bold">
        Home
      </Link>{' '}
      dalam {countdown} detik.
    </div>
  );
};

export default CountdownRedirect;
