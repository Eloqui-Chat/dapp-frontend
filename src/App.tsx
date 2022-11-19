import { useState, useEffect } from "react";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { About, Chats, Contact, Home } from "./Pages";
import { useLocation } from "react-router-dom";
import { useMetaMask } from "metamask-react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { ConfigProvider } from "antd";

const App = () => {
  const { pathname } = useLocation();
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "black",
        },
      }}
    >
      <div className="App">
        {!pathname.includes("chat") && (
          <Navbar status={status} connect={connect} account={account} />
        )}
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {account && (
            <Route path="/chats/*" element={<Chats account={account} />} />
          )}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </ConfigProvider>
  );
};

export default App;
