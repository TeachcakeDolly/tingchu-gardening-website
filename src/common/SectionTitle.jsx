export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__title">{title}</h2>
      <h1 className="section-title__subtitle">{subtitle}</h1>
    </div>
  );
};

export const SectionTitleCenter = ({ title, subtitle }) => {
  return (
    <div className="section-title__center">
      <h2 className="section-title__titleCenter">{title}</h2>
      <h1 className="section-title__subtitle">{subtitle}</h1>
    </div>
  );
};