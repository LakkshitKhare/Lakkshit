export default function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}