export default function YouTubePlayer({ url, title = 'Video de YouTube' }) {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );

  if (!match) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${match[1]}`;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}