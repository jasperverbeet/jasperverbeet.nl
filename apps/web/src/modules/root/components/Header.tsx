import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import Link from "@/modules/ui/components/Link/Link";
import Profile from "@/public/profile.jpeg";
import { IconMenu } from "@tabler/icons-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="box-border border-b border-header-border bg-header-surface">
      <div className="container flex justify-between items-center py-3 max-w-prose">
        <Link variant="labelMd" href="/">
          Jasper Verbeet's Site
        </Link>
        <ButtonAction size="lg" shape="pill" className="pl-1 pt-1 pb-1 pr-2" iconRight={IconMenu}>
          <Image src={Profile} width={32} alt="Profile Picture" className="rounded-full h-full" />
        </ButtonAction>
      </div>
    </header>
  );
};

export default Header;
