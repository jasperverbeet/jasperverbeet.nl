import ButtonAction from "@/app/_ui/components/Button/ButtonAction";
import Link from "@/app/_ui/components/Link/Link";
import Profile from "@/public/profile.jpeg";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between py-3">
        <Link variant="labelSm" href="/">
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
