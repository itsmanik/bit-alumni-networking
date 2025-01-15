import {
  Home,
  BriefcaseBusiness,
  MessageSquareMore,
  ChartColumnIncreasing,
  Telescope,
  Bell,
  CalendarDays,
  Users,
  Building2,
  MicVocal,
  LifeBuoy,
  User,
  Settings,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

const AsideNav = () => {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" location="/" />
          <SidebarItem
            icon={<Telescope size={20} />}
            text="Explore"
            location="/explore"
          />
          <SidebarItem
            icon={<CalendarDays size={20} />}
            text="Events"
            location="/events"
          />
          <SidebarItem
            icon={<Bell size={20} />}
            text="Notifications"
            location="/notifications"
            batch
          />
          <SidebarItem
            icon={<Users size={20} />}
            text="Connections"
            location="/connections"
          />
          <SidebarItem
            icon={<MicVocal size={20} />}
            text="Announcements"
            location="/announcements"
          />
          <SidebarItem
            icon={<MessageSquareMore size={20} />}
            text="Mentorship"
            location="/messaging"
            active={true}
          />
          <SidebarItem
            icon={<ChartColumnIncreasing size={20} />}
            text="Analytics"
            location="/analytics"
          />
          <hr className="my-3" />
          <SidebarItem
            icon={<User size={20} />}
            text="Profile"
            location="/profile"
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            location="/help"
          />
        </Sidebar>
      </div>
    </>
  );
};

export default AsideNav;
