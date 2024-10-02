import { motion } from "framer-motion";
import { PiBugBeetle, PiUser, PiBroadcast } from "react-icons/pi";
import { useAuth } from "./Context";

const ICONS = {
  bug: PiBugBeetle,
  user: PiUser,
  subscribe: PiBroadcast,
};

const bgColors = (isDarkMode) => ({
  bug: isDarkMode ? "bg-red-600/20" : "bg-red-200/50",
  user: isDarkMode ? "bg-blue-600/20" : "bg-blue-200/50",
  subscribe: isDarkMode ? "bg-green-600/20" : "bg-green-200/50",
});

const IconWrapper = ({ children, bgColor }) => (
  <div className={`p-1 rounded-full mr-2 ${bgColor}`}>{children}</div>
);

const NotificationItem = ({ notif, isDarkMode }) => {
  const Icon = ICONS[notif.type];
  return (
    <li className="flex items-center mb-4">
      <IconWrapper bgColor={bgColors(isDarkMode)[notif.type]}>
        <Icon
          className={isDarkMode ? "text-red-400" : "text-red-600"}
          style={{ fontSize: "18px" }}
        />
      </IconWrapper>
      <div>
        <p className="text-xs">{notif.message}</p>
        <p
          className={`text-xs ${
            isDarkMode ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          {notif.time}
        </p>
      </div>
    </li>
  );
};

const ActivityItem = ({ activity, isDarkMode }) => (
  <li className="flex items-center mb-4">
    <IconWrapper bgColor={isDarkMode ? "bg-blue-600/20" : "bg-blue-200/50"}>
      <img
        src={activity.avatar}
        alt="avatar"
        className="w-6 h-6 rounded-full"
      />
    </IconWrapper>
    <div>
      <p className="text-xs">{activity.action}</p>
      <p
        className={`text-xs ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}
      >
        {activity.time}
      </p>
    </div>
  </li>
);

const ContactItem = ({ contact, index, isDarkMode }) => (
  <li className="flex items-center mb-3">
    <IconWrapper bgColor={isDarkMode ? "bg-purple-600/20" : "bg-purple-200/50"}>
      <img
        src={`https://i.pravatar.cc/30?img=${index + 20}`}
        alt="avatar"
        className="w-6 h-6 rounded-full"
      />
    </IconWrapper>
    <div>
      <p className="text-sm">{contact.user}</p>
    </div>
  </li>
);

const Section = ({ title, children, isDarkMode }) => (
  <div>
    <h2
      className={`font-bold text-md mb-2 ${
        isDarkMode ? "text-zinc-100" : "text-zinc-900"
      }`}
    >
      {title}
    </h2>
    <ul>{children}</ul>
  </div>
);

export default function Sidebar() {
  const { isRightClose, isDarkMode } = useAuth();
  const sidebarVariants = {
    open: {
      width: "20rem",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    closed: {
      width: "0rem",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const notifications = [
    { type: "bug", message: "You have a bug that needs ...", time: "Just now" },
    { type: "user", message: "New user registered", time: "59 minutes ago" },
    {
      type: "bug",
      message: "You have a bug that needs ...",
      time: "12 hours ago",
    },
    {
      type: "subscribe",
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const contactsData = [
    { user: "Natali Craig" },
    { user: "Drew Cano" },
    { user: "Orlando Diggs" },
    { user: "Andi Lane" },
    { user: "Kate Morrison" },
    { user: "Koray Occumos" },
  ];

  const activityData = [
    {
      avatar: "https://i.pravatar.cc/30?img=20",
      action: "You have a bug that needs...",
      time: "Just now",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=21",
      action: "Released a new version",
      time: "59 minutes ago",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=22",
      action: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=23",
      action: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      avatar: "https://i.pravatar.cc/30?img=24",
      action: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  return (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={isRightClose ? "closed" : "open"}
      className={`max-h-screen font-sans overflow-scroll ${
        isDarkMode ? "bg-zinc-900 text-zinc-300" : "bg-white text-zinc-700"
      }`}
    >
      <div className="p-4">
        <Section title="Notifications" isDarkMode={isDarkMode}>
          {notifications.map((notif, index) => (
            <NotificationItem
              key={index}
              notif={notif}
              isDarkMode={isDarkMode}
            />
          ))}
        </Section>
        <Section title="Activities" isDarkMode={isDarkMode}>
          {activityData.map((activity, index) => (
            <ActivityItem
              key={index}
              activity={activity}
              isDarkMode={isDarkMode}
            />
          ))}
        </Section>
        <Section title="Contacts" isDarkMode={isDarkMode}>
          {contactsData.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </Section>
      </div>
    </motion.div>
  );
}
