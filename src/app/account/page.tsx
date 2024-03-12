"use client";

import React from "react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/Users/rushikesh/Documents/EPSY/src/components/UI/dropdown-menu_setting.tsx";

import "./style.css";
import RootLayout from "/Users/rushikesh/Documents/EPSY/src/app/layout.tsx";

const SettingOption = React.memo(() => {
  return (
    <RootLayout showNavbar={true}>
      <div id="detailsaccount" className="allpagewidth">
        <div>
          <DropdownMenu
            id="setting2"
            modal={false}
            open={true}
            style={{
              position: "relative",
              top: "-36 px",
            }}
          >
            <DropdownMenuTrigger />

            <DropdownMenuContent
              style={{
                position: "relative",
                top: "-23px",
                left: "7rem",
                borderColor: "Transparent",
              }}
            >
              <ScrollArea id="scrollbar3" scrollHideDelay={0}>
                <DropdownMenuLabel>Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <Link href="/account/general">
                  <DropdownMenuItem>General</DropdownMenuItem>
                </Link>

                <Link href="/account/accountsetting">
                  <DropdownMenuItem>Account Setting</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Plan</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/planusage">
                  <DropdownMenuItem>Plan Usage</DropdownMenuItem>
                </Link>

                <Link href="/account/plandetails">
                  <DropdownMenuItem>Plan Details</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Project & Team</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/project">
                  <DropdownMenuItem>Project</DropdownMenuItem>
                </Link>

                <Link href="/account/team">
                  <DropdownMenuItem>Team</DropdownMenuItem>
                </Link>

                <Link href="/account/users">
                  <DropdownMenuItem>Users</DropdownMenuItem>
                </Link>

                <Link href="/account/role">
                  <DropdownMenuItem>Role</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuLabel>Privacy & Security</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/privacy">
                  <DropdownMenuItem>Privacy & Security</DropdownMenuItem>
                </Link>

                <Link href="/account/excluded">
                  <DropdownMenuItem>Excluded IP </DropdownMenuItem>
                </Link>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </RootLayout>
  );
});
export default SettingOption;
