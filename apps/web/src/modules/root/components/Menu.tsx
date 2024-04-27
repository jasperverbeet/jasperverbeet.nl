"use client";

import * as Popover from "@radix-ui/react-popover";

import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import Profile from "@/public/profile.jpeg";
import { IconAdjustments, IconArrowRight, IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import ButtonLink from "@/modules/ui/components/Button/ButtonLink";
import Divider from "@/modules/ui/components/Divider/Divider";
import ThemeBuilder from "./ThemeBuilder";
import { useState } from "react";

const Menu = () => {
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <>
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
            className="bg-surface-primary border rounded-lg border-border-primary border-b-2 py-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            <ul className="space-y-1 w-32">
              <li className="px-1">
                <ButtonLink href="/blog" variant="ghost" iconRight={IconArrowRight} stretch>
                  Archive
                </ButtonLink>
              </li>
              <li className="px-1">
                <ButtonLink href="/blog" variant="ghost" iconRight={IconArrowRight} stretch>
                  About me
                </ButtonLink>
              </li>
              <Divider />
              <li className="px-1">
                <ButtonAction
                  className="w-full"
                  variant="ghost"
                  iconRight={IconAdjustments}
                  stretch
                  onClick={() => {
                    setThemeOpen(true);
                  }}
                >
                  Theme
                </ButtonAction>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <ThemeBuilder open={themeOpen} onOpenChange={setThemeOpen} />
    </>
  );
};

export default Menu;
