import { useState } from "react";
import {
  FaChevronUp,
  FaChevronRight,
  FaUserCircle,
  FaRegIdBadge,
} from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import {
  PiChartPieSliceLight,
  PiShoppingBagOpen,
  PiFolder,
  PiBookOpenDuotone,
  PiUsersThreeDuotone,
  PiNotebookDuotone,
  PiChatsTeardropDuotone,
} from "react-icons/pi";
import { useAuth } from "./Context";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// Menus outside component for reuse
const menus = {
  ProfileMenu: [
    "Overview",
    "User Projects",
    "Campaigns",
    "Documents",
    "Followers",
  ],
  AccountMenu: ["Profile", "Settings", "Billing", "Notifications", "Security"],
  CorporateMenu: [
    "Company",
    "Departments",
    "Corporate Projects",
    "Tasks",
    "Calendar",
  ],
  BlogMenu: ["Posts", "Categories", "Tags", "Comments", "Authors"],
  SocialMenu: ["Feed", "Messages", "Friends", "Groups", "Notifications"],
};

// Generic prop type for ExpandableMenu
ExpandableMenu.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

// Extract commonly used styles
const getTextColor = (isDarkMode) =>
  isDarkMode ? "text-zinc-300" : "text-zinc-800";
const getHoverBgColor = (isDarkMode) =>
  isDarkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-200";

// ExpandableMenu component
function ExpandableMenu({
  label,
  Icon,
  menuItems,
  activeTab,
  setActiveTab,
  isDarkMode,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="cursor-pointer">
      <div
        className={`flex text-md py-2 pl-3 rounded-lg items-center transition-colors duration-300 ${getHoverBgColor(
          isDarkMode
        )}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <FaChevronUp size={12} className={getTextColor(isDarkMode)} />
          ) : (
            <FaChevronRight size={12} className={getTextColor(isDarkMode)} />
          )}
        </span>
        <Icon
          className={`mx-2 ${getTextColor(isDarkMode)}`}
          style={{ fontSize: "18px" }}
        />
        <span className={`${getTextColor(isDarkMode)} text-md font-normal`}>
          {label}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-md pl-6"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className={`py-2 pl-4 cursor-pointer rounded-lg transition-colors duration-300 ${getHoverBgColor(
                  isDarkMode
                )} ${
                  activeTab === item
                    ? isDarkMode
                      ? "active-tab-dark"
                      : "active-tab"
                    : ""
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

// Sidebar component
export default function Sidebar() {
  const { isLeftClose, isDarkMode } = useAuth();
  const [activeTab, setActiveTab] = useState("Default");
  const [activeTab1, setActiveTab1] = useState("Favorites");
  const [selectedItem1, setSelectedItem1] = useState("");

  const favorites = ["Overview", "Projects"];
  const recent = ["Recent Project 1", "Recent Project 2"];

  const handleItemClick = (item) => setSelectedItem1(item);

  const sidebarVariants = {
    open: {
      width: "15rem",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    closed: {
      width: "0rem",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const dashboardItems = [
    { label: "Default", icon: PiChartPieSliceLight },
    { label: "eCommerce", icon: PiShoppingBagOpen },
    { label: "Projects", icon: PiFolder },
    { label: "Online Courses", icon: PiBookOpenDuotone },
  ];

  return (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={isLeftClose ? "closed" : "open"}
      className={`h-screen font-sans ${
        isDarkMode ? "bg-zinc-900 text-zinc-300" : "bg-white text-zinc-700"
      }`}
    >
      <div
        className={`w-52 ${
          isLeftClose ? "hidden" : "block"
        } h-screen p-4 font-sans overflow-scroll fixed top-0 left-0 z-50 shadow-lg`}
      >
        <div className="flex items-center mb-8">
          <FaUserCircle size={30} className={getTextColor(isDarkMode)} />
          <p className="font-medium text-lg">ByeWind</p>
        </div>

        {/* Favorites/Recent Section */}
        <div className="mb-4">
          <div className="font-normal text-md">
            <div className="mb-4 ml-2">
              <div className="flex mb-2">
                {["Favorites", "Recent"].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab1 === tab
                        ? getTextColor(isDarkMode)
                        : "text-zinc-300"
                    } mr-4`}
                    onClick={() => setActiveTab1(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <ul>
                {(activeTab1 === "Favorites" ? favorites : recent).map(
                  (item) => (
                    <li
                      key={item}
                      onClick={() => handleItemClick(item)}
                      className={`flex items-center text-md py-2 pl-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                        selectedItem1 === item
                          ? isDarkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-zinc-100 text-black"
                          : isDarkMode
                          ? "hover:bg-zinc-700 text-white"
                          : "hover:bg-zinc-200 text-zinc-500"
                      } rounded-lg`}
                    >
                      <span
                        className={`rounded-full h-2 w-2 bg-${
                          selectedItem1 === item
                            ? isDarkMode
                              ? "zinc-300"
                              : "zinc-700"
                            : "zinc-300"
                        } mr-2`}
                      ></span>{" "}
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboards Section */}
        <div className="mb-4">
          <p
            className={`text-${
              isDarkMode ? "zinc-400" : "zinc-500"
            } mb-2 ml-2 text-md font-normal`}
          >
            Dashboards
          </p>
          <ul>
            {dashboardItems.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className={`flex items-center text-md py-2 pl-4 cursor-pointer transition-colors duration-300 ease-in-out ${
                  activeTab === label
                    ? isDarkMode
                      ? "active-tab-dark"
                      : "active-tab"
                    : getHoverBgColor(isDarkMode)
                } rounded-lg`}
                onClick={() => setActiveTab(label)}
              >
                <Icon
                  className={`mr-2 ${getTextColor(isDarkMode)}`}
                  style={{ fontSize: "18px" }}
                />
                <span
                  className={`${getTextColor(isDarkMode)} text-md font-normal`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages Section */}
        <div>
          <p
            className={`text-${
              isDarkMode ? "zinc-400" : "zinc-500"
            } mb-2 ml-2 text-md font-normal`}
          >
            Pages
          </p>
          <ul>
            <ExpandableMenu
              label="Profile"
              Icon={HiOutlineIdentification}
              menuItems={menus.ProfileMenu}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
            <ExpandableMenu
              label="Account"
              Icon={FaRegIdBadge}
              menuItems={menus.AccountMenu}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
            <ExpandableMenu
              label="Corporate"
              Icon={PiUsersThreeDuotone}
              menuItems={menus.CorporateMenu}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
            <ExpandableMenu
              label="Blog"
              Icon={PiNotebookDuotone}
              menuItems={menus.BlogMenu}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
            <ExpandableMenu
              label="Social"
              Icon={PiChatsTeardropDuotone}
              menuItems={menus.SocialMenu}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
