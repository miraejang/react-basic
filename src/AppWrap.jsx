import React from "react";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";

export default function AppWrap() {
  return (
    <>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
    </>
  );
}
