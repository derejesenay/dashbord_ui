import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "user",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "order",
            icon: <CarryOutOutlined />,
            label: "My Orders",
          },
          {
            key: "todo",
            icon: <OrderedListOutlined />,
            label: "Todo",
          },

          {
            key: "profile",
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: "setting",
            icon: <SettingOutlined />,
            label: "setting",
          },
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
