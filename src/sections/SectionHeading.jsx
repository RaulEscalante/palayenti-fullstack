
export default function SectionHeading({ eyebrow, title, highlight, description, }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      </div>

      {description && <p>{description}</p>}
    </div>
  );
}