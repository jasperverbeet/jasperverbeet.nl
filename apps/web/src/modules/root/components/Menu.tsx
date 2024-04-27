"use client";
import * as Popover from "@radix-ui/react-popover";

import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import Profile from "@/public/profile.jpeg";
import { IconAdjustments, IconArrowRight, IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import ButtonLink from "@/modules/ui/components/Button/ButtonLink";
import Divider from "@/modules/ui/components/Divider/Divider";

const Menu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ButtonAction size="lg" shape="pill" className="pl-1 pt-1 pb-1 pr-2" iconRight={IconMenu}>
          <Image src={Profile} width={32} alt="Profile Picture" className="rounded-full h-full" />
        </ButtonAction>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          align="end"
          className="bg-surface-primary border rounded-lg border-border-primary border-b-2 py-1"
        >
          <ul className="space-y-1 w-32">
            <li className="px-1">
              <ButtonLink
                href="/blog"
                className=""
                variant="ghost"
                iconRight={IconArrowRight}
                stretch
              >
                Archive
              </ButtonLink>
            </li>
            <li className="px-1">
              <ButtonLink
                href="/blog"
                className=""
                variant="ghost"
                iconRight={IconArrowRight}
                stretch
              >
                About me
              </ButtonLink>
            </li>
            <Divider />
            <li className="px-1">
              <ButtonLink
                href="/blog"
                className=""
                variant="ghost"
                iconRight={IconAdjustments}
                stretch
              >
                Theme
              </ButtonLink>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Menu;
