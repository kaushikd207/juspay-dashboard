import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { CgSortAz } from "react-icons/cg";
import ReactPaginate from "react-paginate";
import { useAuth } from "./Context";
import { motion } from "framer-motion";
import { data } from "../constant";

// Constants for styling
const PER_PAGE = 10;
const icons = [
  { icon: <FaPlus />, key: "Plus" },
  { icon: <CgSortAz />, key: "SortAz" },
  { icon: <LuArrowUpDown />, key: "ArrowUpDown" },
];

const getStatusClass = (status) => {
  const statusClasses = {
    "In Progress": "text-blue-500",
    "Complete": "text-green-500",
    "Pending": "text-[#b1e3fe]",
    "Approved": "text-[#ffe898]",
    "Rejected": "text-zinc-500",
  };
  return statusClasses[status] || "";
};

const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { isDarkMode } = useAuth();

  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  // Common classes based on theme mode
  const themeClasses = isDarkMode
    ? "bg-zinc-900 text-white"
    : "bg-white text-zinc-900";
  const hoverThemeClasses = isDarkMode
    ? "hover:bg-zinc-800"
    : "hover:bg-[#f8f9fb]";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 w-full h-screen ${themeClasses}`}
    >
      <h2 className="text-xl font-bold mb-4">Order List</h2>

      {/* Search and Icons Row */}
      <div className={`flex items-center justify-between mb-4 rounded-md p-2 ${themeClasses}`}>
        <div className="flex items-center gap-2">
          {icons.map((item, index) => (
            <div key={index} className={`p-2 rounded-md cursor-pointer ${hoverThemeClasses}`}>
              {item.icon}
            </div>
          ))}
        </div>
        <div className="relative">
          <FaSearch className={`absolute top-3.5 left-2 ${isDarkMode ? "text-zinc-300" : "text-zinc-400"}`} />
          <input
            type="text"
            placeholder="Search"
            className={`pl-8 py-2 border rounded-lg w-15 ${isDarkMode ? "bg-zinc-800 text-white border-zinc-600" : "bg-[#f8f9fb] text-black border-zinc-300"}`}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className={`border-b ${isDarkMode ? "text-white" : "text-black"}`}>
              <th className="p-2">Order ID</th>
              <th className="p-2">User</th>
              <th className="p-2">Project</th>
              <th className="p-2">Address</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr
                key={index}
                className={`border-b rounded-md ${hoverThemeClasses} ${
                  isDarkMode ? "text-white border-zinc-600" : "text-black border-zinc-300"
                }`}
              >
                <td className="p-2 whitespace-nowrap">
                  <input type="checkbox" className="mx-2 text-lg" />
                  {item.orderId}
                </td>
                <td className="p-2 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={`https://i.pravatar.cc/30?img=${index + 1}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  {item.user}
                </td>
                <td className="p-2 whitespace-nowrap">{item.project}</td>
                <td className="p-2 whitespace-normal break-words">{item.address}</td>
                <td className="p-2 flex items-center whitespace-nowrap">
                  <MdOutlineDateRange className="mr-2" />
                  {item.date}
                </td>
                <td className={`p-2 ${getStatusClass(item.status)} whitespace-nowrap`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex items-center gap-2"}
          pageClassName={"p-2 font-bold mx-2 rounded"}
          previousClassName={"p-2 font-bold rounded"}
          nextClassName={"p-2 font-bold rounded"}
          breakClassName={"p-2"}
          activeClassName={`${
            isDarkMode ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800" : "bg-white text-zinc-900 hover:bg-zinc-300"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default Table;
