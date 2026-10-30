
import Reveal from '../../components/reveal/Reveal.jsx';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  direction = 'up',
  delay = 0,
}) {
  return (
    <Reveal direction={direction} delay={delay} className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>

        <h2>
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      </div>

      {description && <p>{description}</p>}
    </Reveal>
  );
}
