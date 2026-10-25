export function Spinner({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`animate-spin motion-reduce:animate-none ${className}`}>
      <circle
        cx="12"
        cy="12"
        r="10"
        pathLength={100}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="75 100"
      />
    </svg>
  );
}
