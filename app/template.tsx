export default function Template({ children }: { children: React.ReactNode }) {
  return (<><div className="wipe" aria-hidden /><div className="page">{children}</div></>);
}
