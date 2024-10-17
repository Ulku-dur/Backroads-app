const PageLink = ({ link, itemClass }) => {
    // link objesinin tanımlı olup olmadığını kontrol edin
    if (!link) {
      return null; // Eğer link undefined ise hiçbir şey render etme
    }
  
    return (
      <li key={link.id}>
        <a href={link.href} className={itemClass}>
          {link.text}
        </a>
      </li>
    );
  };
  
  export default PageLink;
  