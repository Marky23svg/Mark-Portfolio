function IPhone17ProMaxMockup({ src, children, className = "", title = "iPhone Screen" }) {
  return (
    <div className={`relative mx-auto transition-transform duration-300 hover:-translate-y-2 ${className}`} style={{ width: '250px' }}>

      {/* Outer frame - Titanium Space Black */}
      <div className="relative rounded-[40px] border border-neutral-600 overflow-hidden" style={{
        background: 'linear-gradient(145deg, #3a3a3c 0%, #2a2a2c 30%, #1a1a1c 60%, #111113 100%)',
        padding: '3px',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.4)',
      }}>

        {/* Frame edge reflection top */}
        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[40px] pointer-events-none z-10" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)' }} />
        {/* Frame edge reflection left */}
        <div className="absolute top-0 left-0 w-1/2 h-full rounded-l-[40px] pointer-events-none z-10" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 100%)' }} />
        {/* Frame edge reflection right */}
        <div className="absolute top-0 right-0 w-8 h-full rounded-r-[40px] pointer-events-none z-10" style={{ background: 'linear-gradient(270deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }} />

        {/* Inner body */}
        <div className="relative rounded-[37px] overflow-hidden" style={{ background: 'linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 50%, #111113 100%)' }}>

          {/* Screen area */}
          <div className="relative overflow-hidden rounded-[37px]" style={{ aspectRatio: '9/18' }}>

            {/* Screen content */}
            <div className="absolute inset-0 bg-black" />
            {src ? (
              <img src={src} alt={title} className="relative w-full h-full object-cover object-top z-10" />
            ) : (
              <div className="relative z-10 w-full h-full">{children}</div>
            )}

            {/* Screen glare */}
            <div className="absolute top-0 left-0 w-2/3 h-1/3 pointer-events-none z-20" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 rounded-full -mt-1" style={{
              width: '75px',
              height: '19px',
              background: 'radial-gradient(ellipse at center, #1a1a1a 60%, #0a0a0a 100%)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)',
            }}>
              {/* Front camera dot */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{
                background: 'radial-gradient(circle at 35% 35%, #2a2a2e, #0a0a0a)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1)',
              }} />
            </div>

            {/* Status bar time */}
            <div className="absolute top-4 left-9 z-30 -mt-3">
              <span className="text-black text-[11px] font-semibold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>9:23</span>
            </div>

            {/* Status bar icons */}
            <div className="absolute top-4 right-7 z-30 -mt-1.5 flex items-center gap-1">
              <div className="flex gap-[2px] items-end h-3">
                {[2, 3, 4, 5].map((h, i) => (
                  <div key={i} className="w-[3px] rounded-sm bg-black" style={{ height: `${h * 2}px`, opacity: i < 3 ? 1 : 0.4 }} />
                ))}
              </div>
              <div className="w-4 h-2.5 rounded-sm border border-white/80 relative ml-0.5">
                <div className="absolute inset-[2px] right-[3px] bg-green-500 rounded-sm" />
                <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/60 rounded-r-sm" />
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-24 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </div>

          {/* Side buttons - Volume up */}
          <div className="absolute left-0 top-[22%] w-[3px] h-10 rounded-r-sm z-20" style={{
            background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
            boxShadow: '-1px 0 3px rgba(0,0,0,0.5)',
            left: '-3px',
          }} />
          {/* Volume down */}
          <div className="absolute left-0 top-[34%] w-[3px] h-10 rounded-r-sm z-20" style={{
            background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
            boxShadow: '-1px 0 3px rgba(0,0,0,0.5)',
            left: '-3px',
          }} />
          {/* Action button */}
          <div className="absolute top-[14%] w-[3px] h-7 rounded-r-sm z-20" style={{
            background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
            boxShadow: '-1px 0 3px rgba(0,0,0,0.5)',
            left: '-3px',
          }} />
          {/* Power button */}
          <div className="absolute top-[22%] w-[3px] h-14 rounded-l-sm z-20" style={{
            background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
            boxShadow: '1px 0 3px rgba(0,0,0,0.5)',
            right: '-3px',
          }} />

        </div>
      </div>

      {/* Ground shadow */}
      <div className="w-3/4 h-5 mx-auto blur-xl rounded-full mt-2" style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 10%)' }} />
    </div>
  );
}

export default IPhone17ProMaxMockup;
