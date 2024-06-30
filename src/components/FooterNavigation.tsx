import { cn } from "@/lib/utils";
import {
  BarChartIcon,
  HouseIcon,
  SettingsIcon,
  WalletMinimalIcon,
} from "lucide-react";
import React from "react";
import LinkComponent from "./ui/LinkComponent";

type FooterNavigationProps<T = unknown> = {
  children?: React.ReactNode;
  className?: string;
} & T;

type FooterNavigationIcons = {
  icon: React.ReactNode;
  href: string;
  anchor: string
};

const mockIconsMenu = [
  {
    icon: <HouseIcon />,
    href: "/#",
    anchor: "Home"
  },
  {
    icon: <WalletMinimalIcon />,
    href: "/#",
    anchor: "Accounts"
  },
  {
    icon: <BarChartIcon />,
    href: "/#",
    anchor: "Analytics"
  },
  {
    icon: <SettingsIcon />,
    href: "/#",
    anchor: "Settings"
  },
];

function FooterIcon(
  { children }: FooterNavigationProps,
) {
  return (
    <>
      {children}
    </>
  );
}

function FooterNavigationLinks() {
  return (
    <div>
      <ul className="flex justify-around w-screen h-auto">
        {
          mockIconsMenu.map((icon, index) => (
            <li key={index} className="">
                <LinkComponent
                  href={icon.href}
                  className="flex flex-col items-center justify-center text-default-dark hover:text-primary"
                >
                  <FooterIcon>
                    {icon.icon}
                  </FooterIcon>
                  {icon.anchor}
                </LinkComponent>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

function FooterNavigation() {
  return (
    <footer className="border-t absolute bottom-0 py-4">
      <FooterNavigationLinks />
    </footer>
  );
}

export { FooterIcon, FooterNavigation };
