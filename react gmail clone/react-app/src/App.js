import "./App.css";
// import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import {
  AiOutlineMail,
  AiOutlineInbox,
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineSend,
  AiOutlineFileText,
} from "react-icons/ai";
import { LuPencil } from "react-icons/lu";
import { MdExpandMore } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSingleSelect } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { SiGooglemeet } from "react-icons/si";

function App() {
  const menuItems = [
    { name: "Gmail", icon: <AiOutlineMail /> },
    { name: "Compose", icon: <LuPencil /> },
    { name: "Inbox", icon: <AiOutlineInbox /> },
    { name: "Starred", icon: <AiOutlineStar /> },
    { name: "Snoozed", icon: <AiOutlineClockCircle /> },
    { name: "Sent", icon: <AiOutlineSend /> },
    { name: "Drafts", icon: <AiOutlineFileText /> },
    { name: "More", icon: <MdExpandMore /> },
    { name: "Labels", icon: null },
  ];

  const icons = [
    <IoReorderThreeOutline />,
    <IoMail />,
    <CiChat1 />,
    <SiGooglemeet />,
  ];

  const headermenu = [
    <FaRegCircleQuestion />,
    <IoSettingsOutline />,
    <TbGridDots />,
    <FaRegUserCircle />,
  ];

  const cont = [<GoSingleSelect />, <IoMdRefresh />, <IoMdMore />];

  const data = [
    {
      checkbox: <GoSingleSelect />,
      star: <AiOutlineStar />,
      name: "Isha Khatri",
      desc: "Hi i contacted you today!",
      date: "27Apr",
    },
    {
      checkbox: <GoSingleSelect />,
      star: <AiOutlineStar />,
      name: "parv Khatri",
      desc: "Hi i contacted you today!",
      date: "30Apr",
    },
    {
      checkbox: <GoSingleSelect />,
      star: <AiOutlineStar />,
      name: "Isha",
      desc: "Hi i contacted you today!",
      date: "28Apr",
    },
    {
      checkbox: <GoSingleSelect />,
      star: <AiOutlineStar />,
      name: "Ish Khatri",
      desc: "Hi i contacted you today!",
      date: "26Apr",
    },
    {
      checkbox: <GoSingleSelect />,
      star: <AiOutlineStar />,
      name: "Isha Khatri",
      desc: "Hi i contacted you today!",
      date: "24Apr",
    },
  ];

  return (
    <div className="App">
      <Sidebar isha={menuItems} side={icons} />
      <div style={{ width: "-webkit-fill-available" }}>
        <Header head={headermenu} />
        <Content data={data} />
        <Footer />
      </div>
    </div>
  );
}
export default App;
