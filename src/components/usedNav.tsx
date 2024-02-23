import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

// import { useRouter } from "next/navigation";

import "tailwindcss/tailwind.css";

import { OverviewPage } from "../Pages/Overview";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNavbar() {
  return (
    <div className="absolute  left: -23rem">
      <DropdownMenu open={true}>
        <DropdownMenuTrigger />
        <DropdownMenuContent>
          <DropdownMenuLabel>Epsy</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Use Link component for client-side navigation */}
          <Link href="/overview">
            <DropdownMenuItem>
              <HomeOutlinedIcon style={{ marginRight: "6px" }} />
              Overview
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard">
            <DropdownMenuItem>
              <DashboardOutlinedIcon style={{ marginRight: "6px" }} /> Dashboard
            </DropdownMenuItem>
          </Link>

          <Link href="/charts">
            <DropdownMenuItem>
              <InsertChartOutlinedRoundedIcon style={{ marginRight: "6px" }} />
              Charts
            </DropdownMenuItem>
          </Link>

          <Link href="/analyse">
            <DropdownMenuItem>
              <ShowChartRoundedIcon style={{ marginRight: "6px" }} />
              Analyse
            </DropdownMenuItem>
          </Link>

          <Link href="/heatmap">
            <DropdownMenuItem>
              <WhatshotIcon style={{ marginRight: "6px" }} />
              Heatmap
            </DropdownMenuItem>
          </Link>

          <Link href="/data">
            <DropdownMenuItem>
              <AutoAwesomeRoundedIcon style={{ marginRight: "6px" }} />
              Data
            </DropdownMenuItem>
          </Link>

          <Link href="/users">
            <DropdownMenuItem>
              <PeopleAltOutlinedIcon style={{ marginRight: "6px" }} />
              Users
            </DropdownMenuItem>
          </Link>

          <Link href="/session">
            <DropdownMenuItem>
              <SlowMotionVideoOutlinedIcon style={{ marginRight: "6px" }} />
              Session
            </DropdownMenuItem>
          </Link>

          <Link href="/account">
            <DropdownMenuItem>
              <SettingsSuggestOutlinedIcon style={{ marginRight: "6px" }} />
              Account
            </DropdownMenuItem>
          </Link>

          <Link href="/logout">
            <DropdownMenuItem>
              <LogoutOutlinedIcon style={{ marginRight: "6px" }} />
              Logout
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}