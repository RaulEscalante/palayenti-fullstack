export default function SpotifyPlayer({ url, title = 'Spotify Player' }) {
  if (!url) return null;

  const match = url.match(
    /open\.spotify\.com\/(?:intl-[a-z]{2}\/)?track\/([a-zA-Z0-9]+)/
  );

  if (!match) return null;

  const embedUrl = `https://open.spotify.com/embed/track/${match[1]}`;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="152"
      style={{ border: 0, borderRadius: '12px' }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={`Reproductor de ${title}`}
    />
  );
}