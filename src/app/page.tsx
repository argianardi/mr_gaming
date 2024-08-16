import Banner from '@/components/Banner';
import GameServices from '@/components/GameServices';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Banner />
      <GameServices />
    </div>
  );
}
