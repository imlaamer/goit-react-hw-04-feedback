import css from './Section.module.css';

function Section({ title, children }) {
  const { sectionTitle } = css;
  return (
    <section>
      <p className={sectionTitle}> {title}</p>
      {children}
    </section>
  );
}

export default Section;
