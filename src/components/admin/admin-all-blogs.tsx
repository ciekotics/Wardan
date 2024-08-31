"use client";

import { useGetDashboardMetricsQuery } from "@/store/actions/slices/api-slice";
import { useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";

const AdminAllBlogs = () => {
  const { data: allBlogs } = useGetDashboardMetricsQuery();

  useEffect(() => {}, [allBlogs]);
  return (
    <div className="all-blogs">
      {allBlogs?.blogs?.map((item, index) => {
        console.log(item);
        return (
          <div key={index} className="all-blogs__item">
            {/* {item.title} */}

            <div className="btns">
              <div className="edit">
                <MdModeEditOutline size={25} />
              </div>
              <div className="delete">
                <ImCross size={25} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminAllBlogs;
