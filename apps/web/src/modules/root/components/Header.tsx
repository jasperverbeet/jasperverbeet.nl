import Link from "@/modules/ui/components/Link/Link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="box-border border-b border-header-border bg-header-surface">
      <div className="container flex justify-between items-center py-3 max-w-prose">
        <Link variant="labelMd" href="/">
          Jasper Verbeet's Blog
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
