import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import Link from "@/modules/ui/components/Link/Link";
import Profile from "@/public/profile.jpeg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="box-border border-b border-header-border bg-header-surface">
      <div className="container flex justify-between items-center py-3">
        <Link variant="labelMd" href="/">
          Jasper Verbeet's Blog
        </Link>
        <ButtonAction size="lg" shape="circle" className="p-0">
          <Image src={Profile} alt="Profile Picture" width={64} className="w-full rounded-full" />
        </ButtonAction>
      </div>
    </header>
  );
};

export default Header;
