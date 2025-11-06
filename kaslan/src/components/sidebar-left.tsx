import * as React from "react"
import {

  Bell,
  Command,
  Home,
  Inbox,
  Search,
  Sparkles,
  StarIcon,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "Kaslan Hub",
      logo: Command,
      plan: "Enterprise",
    },

  ],
  navMain: [
    {
      title: "Akış",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Arama Yap",
      url: "#",
      icon: Search,
    },
    {
      title: "Keşfet",
      url: "#",
      icon: Sparkles,
    },

    {
      title: "Kütüphanem",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
    {
      title: "Favoriler",
      url: "#",
      icon: StarIcon,
    },
    {
      title: "Bildirimler",
      url: "#",
      icon: Bell,
    }
  ],


}

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>


      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
