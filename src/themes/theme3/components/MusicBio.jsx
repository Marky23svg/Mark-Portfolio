
export default function MusicBio() {
  return (
    <div className="w-full max-w-[300px]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-medium tracking-widest text-neutral-500">
          LISTENING TO
        </p>

        <span className="flex items-center gap-1.5 text-[10px] text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Spotify
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <iframe
          title="My favorite Spotify track"
          src="https://open.spotify.com/embed/track/1824ElVTa8XiWOjOlujl81?utm_source=generator&theme=0"
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block"
        />
      </div>
    </div>
  );
}
