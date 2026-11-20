function MacBookProMockup({ src, children, className = "", title = "MacBook Screen" }) {
  return (
    <div className={`w-full max-w-3xl mx-auto transition-transform duration-300 hover:-translate-y-2 ${className}`}>

      {/* Screen */}
      <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-neutral-800 dark:to-neutral-900 rounded-t-2xl p-1.5 shadow-2xl dark:border-neutral-800">

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-neutral-800 dark:to-neutral-900 rounded-b-sm z-10 flex items-center justify-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-black border border-neutral-700" />
          <div className="w-0.5 h-0.5 rounded-full bg-green-500 opacity-80" />
        </div>

        {/* Screen bezel */}
        <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {src ? (
            <img src={src} alt={title} className="w-full h-full object-cover object-top" />
          ) : (
            children
          )}
        </div>

        {/* Bottom chin */}
        <div className="flex items-center justify-center mt-0.5">
          <span className="text-[8px] text-neutral-400 dark:text-neutral-500 font-light tracking-widest">MarkBook</span>
        </div>
      </div>

      {/* Keyboard base */}
      <div className="bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-neutral-600 dark:to-neutral-800 rounded-b-xl rounded-t-xs px-12 py-1 pb-3 shadow-xl -mx-10">
        <div className="w-28 h-1.5 mx-auto -mt-1 bg-neutral-600/50 dark:bg-neutral-700/50 rounded-b-lg border border-neutral-500/30" />
      </div>

      {/* Shadow */}
      <div className="w-3/4 h-3 mx-auto bg-black/20 dark:bg-black/40 blur-xl rounded-full mt-1" />
    </div>
  );
}

export default MacBookProMockup;