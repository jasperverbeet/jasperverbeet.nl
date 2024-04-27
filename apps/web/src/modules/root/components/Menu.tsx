"use client";

import Image from "next/image";
import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Profile from "@/public/profile.jpeg";
import { IconChevronRight, IconMenu } from "@tabler/icons-react";
import ButtonLink from "@/modules/ui/components/Button/ButtonLink";
import Divider from "@/modules/ui/components/Divider/Divider";
import dynamic from "next/dynamic";

const MenuThemeRadio = dynamic(() => import("@/modules/root/components/MenuThemeRadio"), {
  ssr: false,
});

const Menu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <ButtonAction size="lg" shape="pill" className="pl-1 pt-1 pb-1 pr-2" iconRight={IconMenu}>
          <Image src={Profile} width={32} alt="Profile Picture" className="rounded-full h-full" />
        </ButtonAction>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="end"
        sideOffset={8}
        className="z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-background-primary border-border-primary p-1 border-b-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 space-y-1"
      >
        <DropdownMenu.Item className="outline-none">
          <ButtonLink href="/blog" variant="ghost" stretch>
            Archive
          </ButtonLink>
        </DropdownMenu.Item>
        <DropdownMenu.Separator asChild>
          <Divider />
        </DropdownMenu.Separator>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="outline-none">
            <ButtonAction variant="ghost" stretch className="w-full" iconRight={IconChevronRight}>
              Theme
            </ButtonAction>
          </DropdownMenu.SubTrigger>
          <MenuThemeRadio />
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Menu;
