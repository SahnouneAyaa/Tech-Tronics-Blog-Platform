// Remove unnecessary imports as we're hardcoding the text
import Link from "next/link";

const Logo = () => {
  // Hardcoding the platform name directly, as requested
  const platformName = "TechTronics"; 

  return (
    <Link href="/" className="navbar-brand">
      {platformName}
    </Link>
  );
};

export default Logo;