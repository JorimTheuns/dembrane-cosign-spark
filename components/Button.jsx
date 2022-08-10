export default function Button({ children }) {
  return (
    <button
      type="button"
      className="px-6 py-2.5 bg-white border-blackish border-4 text-blackish font-bold text-xl hover:bg-apple focus:ring-2 ring-apple active:scale-95 transition-all duration-150 ease-in-out"
    >
      {children}
    </button>
  );
}
