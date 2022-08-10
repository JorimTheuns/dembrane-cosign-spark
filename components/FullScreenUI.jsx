export default function FullScreenUI({ children }) {
  return (
    <div className="min-h-screen w-screen flex flex-col flex-wrap justify-center content-center gap-2  p-2">
      {children}
    </div>
  );
}
