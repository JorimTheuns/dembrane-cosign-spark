export default function Button({
  children,
  dataTallyOpen,
  dataTallyLayout,
  dataTallyWidth,
  dataTallyOverlay,
  dataTallyEmojiText,
  dataTallyEmojiAnimation,
}) {
  return (
    <button
      data-tally-open={dataTallyOpen}
      data-tally-layout={dataTallyLayout}
      data-tally-width={dataTallyWidth}
      data-tally-overlay={dataTallyOverlay}
      data-tally-emoji-text={dataTallyEmojiText}
      data-tally-emoji-animation={dataTallyEmojiAnimation}
      type="button"
      className="px-6 py-2.5 bg-white border-blackish border-4 text-blackish font-bold text-xl hover:bg-apple focus:ring-2 ring-apple active:scale-95 transition-all duration-150 ease-in-out"
    >
      {children}
    </button>
  );
}
