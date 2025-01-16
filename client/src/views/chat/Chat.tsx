import { Input, Button, Card, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          {/* Toggle Button */}
          <Button
            icon={isSidebarOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center justify-center md:hidden" // แสดงเฉพาะบนมือถือ
          />
          <h1 className="text-2xl font-bold text-gray-800">Chatbot</h1>
        </div>
        <Dropdown overlay={profileMenu} placement="bottomRight">
          <Button shape="circle" icon={<UserOutlined />} />
        </Dropdown>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 h-full w-70 bg-white border-r border-gray-300 p-4 flex flex-col transform transition-transform duration-300 md:relative md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Search Input */}
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search chat"
            className="mb-4"
          />

          {/* Chat Items */}
          <div className="flex-1 pr-2 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="font-medium text-gray-800">Camera outfit</p>
              <p className="text-sm text-gray-500 truncate">
                I have a photoshoot tomorrow...
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="font-medium text-gray-800">Vacation planning</p>
              <p className="text-sm text-gray-500 truncate">
                I'm planning a trip to Europe...
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="font-medium text-gray-800">Healthy recipes</p>
              <p className="text-sm text-gray-500 truncate">
                Can you suggest some healthy...
              </p>
            </div>
          </div>

          {/* New Chat Button */}
          <Button
            type="primary"
            className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            New Chat
          </Button>
        </div>

        {/* Overlay for Sidebar on Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Chat Container */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
            {/* Chat Header */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800">Hello, there</h1>
              <p className="text-lg text-gray-600">How can I help you today?</p>
            </div>

            {/* Suggestions */}
            <div className="grid  h-full justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card
                className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
                bordered={false}
              >
                <p className="text-gray-800 font-medium">
                  Help me sound like an expert for an upcoming trip
                </p>
              </Card>
              <Card
                className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
                bordered={false}
              >
                <p className="text-gray-800 font-medium">
                  Outline a logical sales pitch for a new product
                </p>
              </Card>
              <Card
                className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
                bordered={false}
              >
                <p className="text-gray-800 font-medium">
                  Help me get organized with a list of 10 tips
                </p>
              </Card>
              <Card
                className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
                bordered={false}
              >
                <p className="text-gray-800 font-medium">
                  Write code for a specific task, including edge cases
                </p>
              </Card>
            </div>

            {/* Input Section */}
            <div className="mt-auto">
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-inner">
                <Input
                  placeholder="Enter a prompt here"
                  className="flex-1 border-none focus:ring-0 bg-transparent"
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
