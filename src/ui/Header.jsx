import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="microblog.svg"></img>
        <h1>Microblog</h1>
      </div>
      <div>
        <input placeholder="search for blog" />
      </div>
      <div>
        <Button path="/blog">Create your post</Button>
      </div>
    </div>
  );
}

export default Header;
