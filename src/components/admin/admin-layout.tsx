"use client";

import React, { useState } from "react";
import Topbar from "./topbar";
import AdminDashboard from "./admin-dashboard";
import { ReduxWrapper } from "../redux-wrapper";

const AdminLayout = () => {

  const [search, setSearch] = useState<string>('')

  console.log(search)
  return (
    <article className="admin-layout">
      <ReduxWrapper>
        <Topbar setSearch={setSearch} />

        <AdminDashboard search={search} />
      </ReduxWrapper>
    </article>
  );
};

export default AdminLayout;
