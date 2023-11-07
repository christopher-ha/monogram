import Intro from '../components/Intro';
import Javascript from '../components/Javascript';
import Logos from '../components/Logos';
import API from '../components/API';
import Markup from '../components/Markup';
import Scores from '../components/Scores';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      {/* Title, CTA, and Gradients */}
      <Intro />

      {/* Javascript*/}
      <Javascript />

      {/* Logos */}
      <Logos />

      {/* API */}
      <API />

      {/* Markup */}
      <Markup />

      {/* Top Audit Scores */}
      <Scores />
    </main>
  );
}
