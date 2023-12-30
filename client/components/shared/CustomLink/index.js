import Link from 'next/link';

const CustomLink = ({ label, href, locale, target, isExternal }) => {
  if (isExternal) {
    return (
      <Link href={href} target={target}>
        <>{label}</>
      </Link>
    );
  } else {
    return (
      <Link target={target} href={`${href}?lang=${locale || 'en'}`}>
        <>{label}</>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
