"use client";

import Button from "@/modules/ui/components/Button/Button";
import ButtonContent from "@/modules/ui/components/Button/ButtonContent";
import Icon from "@/modules/ui/components/Icon/Icon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconCheck } from "@tabler/icons-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const MenuThemeRadio = () => {
  const { theme, setTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(themes);

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        className="z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-background-primary border-border-primary p-1 border-b-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 space-y-1"
        sideOffset={16}
      >
        <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme} className="space-y-1">
          {themes.map((theme) => (
            <Button asChild key={theme} variant="ghost" className="cursor-default">
              <DropdownMenu.RadioItem value={theme}>
                <ButtonContent stretch className="capitalize">
                  {theme}
                  <DropdownMenu.ItemIndicator asChild>
                    <Icon icon={IconCheck} />
                  </DropdownMenu.ItemIndicator>
                </ButtonContent>
              </DropdownMenu.RadioItem>
            </Button>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  );
};

export default MenuThemeRadio;
