import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        // Her bir 'link' objesinin tanımlı olup olmadığını kontrol edin
        if (!link) {
          return null; // Eğer link undefined ise, o öğeyi render etme
        }

        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
