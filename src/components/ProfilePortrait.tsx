import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { MonogramGraphic } from './EditorialGraphics';

export default function ProfilePortrait({ placement }: { placement: 'hero' | 'about' }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const portrait = portfolio.portrait;

  if (!portrait.src || portrait.src === failedSource) {
    return placement === 'about' ? <MonogramGraphic /> : null;
  }

  return (
    <div className={`profile-portrait profile-portrait--${placement} pointer-events-none`}>
      <img
        src={portrait.src}
        alt={portrait.alt}
        style={{ objectPosition: portrait.objectPosition }}
        width={800}
        height={1000}
        loading={placement === 'hero' ? 'eager' : 'lazy'}
        fetchPriority={placement === 'hero' ? 'high' : 'auto'}
        decoding="async"
        onError={() => setFailedSource(portrait.src)}
      />
    </div>
  );
}