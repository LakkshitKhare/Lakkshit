interface GraphicProps {
  className?: string;
}

const orbitTicks = Array.from({ length: 72 }, (_, index) => {
  const angle = (index * Math.PI) / 36;
  const innerRadius = index % 6 === 0 ? 284 : 289;
  return {
    x1: 320 + Math.cos(angle) * innerRadius,
    y1: 320 + Math.sin(angle) * innerRadius,
    x2: 320 + Math.cos(angle) * 296,
    y2: 320 + Math.sin(angle) * 296,
  };
});

export function OrbitalGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={`orbital-graphic ${className}`} viewBox="0 0 640 640" fill="none" aria-hidden="true" focusable="false">
      <g className="orbital-grid" stroke="currentColor" strokeWidth="0.7">
        <circle cx="320" cy="320" r="272" />
        <circle cx="320" cy="320" r="296" strokeDasharray="1 8" />
        {orbitTicks.map((tick, index) => <line key={index} {...tick} />)}
        <path d="M8 320H632M320 8V632" strokeDasharray="2 9" opacity="0.45" />
      </g>
      <g className="orbital-sphere" transform="translate(320 320) rotate(-28)" stroke="currentColor" strokeWidth="0.8">
        <circle r="245" />
        {[32, 66, 102, 138, 174, 208, 233].map((radius) => <ellipse key={radius} rx={radius} ry="245" />)}
        {[-180, -120, -60, 0, 60, 120, 180].map((offset) => (
          <ellipse key={offset} cy={offset} rx={Math.sqrt(245 ** 2 - offset ** 2)} ry="42" />
        ))}
      </g>
      <g className="orbital-trace" stroke="currentColor">
        <circle cx="320" cy="320" r="272" strokeWidth="1.3" strokeDasharray="115 1594" transform="rotate(-45 320 320)" />
        <circle cx="512.3" cy="127.7" r="3.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function MonogramGraphic({ className = '' }: GraphicProps) {
  return (
    <svg
      className={`monogram-graphic ${className}`}
      viewBox="0 0 420 340"
      fill="none"
      role="img"
      aria-label="Custom geometric LK monogram for Lakkshit Khare"
      focusable="false"
    >
      <g className="monogram-grid" stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 12 }, (_, index) => <path key={`v-${index}`} d={`M${30 + index * 32} 16V324`} />)}
        {Array.from({ length: 10 }, (_, index) => <path key={`h-${index}`} d={`M16 ${26 + index * 32}H404`} />)}
      </g>
      <g className="monogram-construction" stroke="currentColor" strokeWidth="0.8">
        <ellipse cx="214" cy="172" rx="185" ry="92" transform="rotate(-33 214 172)" />
        <ellipse cx="214" cy="172" rx="185" ry="118" transform="rotate(33 214 172)" />
        <path d="M36 50H60M48 38V62M360 290H384M372 278V302M190 170H210M200 160V180" />
        <path d="M68 70L352 294M78 286L350 64" strokeDasharray="3 6" />
      </g>
      <g className="monogram-lettering" fill="currentColor">
        <path d="M78 88H130V241H220V293H78V88Z" />
        <path d="M231 88H274V165L334 88H391L303 190L394 293H333L274 221V293H231V88Z" />
      </g>
      <g className="monogram-outline" stroke="currentColor" strokeWidth="0.8">
        <path d="M70 80H122V233H212V285H70V80Z" />
        <path d="M223 80H266V157L326 80H383L295 182L386 285H325L266 213V285H223V80Z" />
      </g>
    </svg>
  );
}

// Deterministic abstract waveforms, not measurements from the research project.
const signalPaths = Array.from({ length: 5 }, (_, row) => {
  const points = Array.from({ length: 241 }, (_, step) => {
    const x = 20 + step * 2.5;
    const envelope = 5 + 5 * Math.sin(step * 0.026 + row) ** 2;
    const rhythm = Math.sin(step * (0.2 + row * 0.012) + row * 1.4);
    const detail = Math.sin(step * 0.7 + row) * 0.3;
    const burst = Math.exp(-(((step - (105 + row * 12)) / 18) ** 2)) * Math.sin(step * 1.05) * 10;
    const y = 42 + row * 47 + (rhythm + detail) * envelope + burst;
    return `${step === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  return points.join(' ');
});

export function SignalGraphic({ className = '' }: GraphicProps) {
  return (
    <figure className={`signal-graphic ${className}`}>
      <svg viewBox="0 0 640 270" fill="none" aria-hidden="true" focusable="false">
        <g className="signal-grid" stroke="currentColor" strokeWidth="0.6">
          {Array.from({ length: 13 }, (_, index) => <path key={index} d={`M${20 + index * 50} 15V251`} />)}
          {Array.from({ length: 5 }, (_, index) => <path key={`h-${index}`} d={`M20 ${42 + index * 47}H620`} />)}
        </g>
        <g className="signal-traces" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {signalPaths.map((path, index) => <path key={index} d={path} pathLength="1" className={`signal-trace signal-trace--${index}`} />)}
        </g>
        <g className="signal-register" stroke="currentColor" strokeWidth="0.8">
          <path d="M12 15H28M20 7V23M612 251H628M620 243V259" />
          <path d="M20 263H620" opacity="0.35" />
        </g>
      </svg>
      <figcaption><span>FIG. R / SIGNAL STUDY</span><span>ILLUSTRATIVE</span></figcaption>
    </figure>
  );
}