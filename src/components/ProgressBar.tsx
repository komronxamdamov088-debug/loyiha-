export function ProgressBar({ progress }: { progress: number }) {
  return <div className="prog" style={{ width: `${progress}%` }} />
}
