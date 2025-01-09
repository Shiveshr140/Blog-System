import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main style={{ maxWidth: "800px", margin: "30px auto" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
