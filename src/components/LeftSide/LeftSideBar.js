import LeftSideLinks from "./LeftSideLinks";
import ProfilePill from "./ProfilePill";
import {
  HouseSvg,
  SearchSvg,
  NotificationSvg,
  MessageSvg,
  ProfileSvg,
  MoreSvg,
} from "../Icon";
const sideLinks = [
  {
    name: "Home",
    icon: HouseSvg,
  },
  {
    name: "Explore",
    icon: SearchSvg,
  },
  {
    name: "Notifications",
    icon: NotificationSvg,
  },
  {
    name: "Messages",
    icon: MessageSvg,
  },
  {
    name: "Profile",
    icon: ProfileSvg,
  },
  {
    name: "More",
    icon: MoreSvg,
  },
];

export default function LeftSideBar() {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-black text-white h-screen border-r border-gray-700 sticky top-0">
      <LeftSideLinks sideLinks={sideLinks} />
      <ProfilePill />
    </div>
  );
}
