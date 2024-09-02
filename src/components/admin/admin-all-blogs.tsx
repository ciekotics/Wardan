"use client";

import { useGetAllBlogsQuery } from "@/store/actions/slices/api-slice";
import { useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";

import Image from "next/image";
// import { RootState, useAppDispatch, useAppSelector } from "@/store";
// import { resetRefetchBlogsAdmin } from "@/store/actions/slices/global-slice";

const AdminAllBlogs = ({ search }: { search: string }) => {

  const allBlogsQuery = useGetAllBlogsQuery({
    search
  });

  const allBlogs = allBlogsQuery.data;

  useEffect(() => {
  }, [search])

  return (
    <div className="all-blogs">
      {allBlogs?.blogs && allBlogs?.blogs?.length > 0 ? allBlogs?.blogs?.map((item, index) => {

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

            <Image src={item.banner} alt={item.id + item.title} width={100} height={100} priority />
            <div className="title">{item.title}</div>
          </div>
        );
      }) : null}
    </div>
  );
};

export default AdminAllBlogs;
