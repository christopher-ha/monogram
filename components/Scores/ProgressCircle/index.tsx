import { useEffect, useState } from 'react';
import { m, MotionValue, useMotionValueEvent } from 'framer-motion';

interface ProgressCircleProps {
  pathProgress: MotionValue<number>;
}

export default function ProgressCircle({ pathProgress }: ProgressCircleProps) {
  const [progress, setProgress] = useState<number>(0);

  useMotionValueEvent(pathProgress, 'change', (latest) => {
    setProgress(Math.round(latest * 100));
  });

  return (
    <div className="relative h-full w-full">
      <svg
        id="progress"
        className="flex-1"
        style={{ flex: '1 0 25%' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="35" pathLength="1" className="bg" />
        <m.circle
          cx="50"
          cy="50"
          r="35"
          pathLength="1"
          className="indicator"
          style={{ pathLength: pathProgress, opacity: pathProgress }}
        />
      </svg>
      <m.p
        style={{ opacity: pathProgress }}
        className="score absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-lime-200"
      >
        {progress}
      </m.p>
    </div>
  );
}