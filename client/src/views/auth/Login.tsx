import { Form, Input, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

function Login() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-8 shadow-lg rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 rounded-full p-3">
              <img src="" alt="Logo" className="h-8 w-8" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
            Welcome back!
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Please enter your credentials to sign in!
          </p>

          {/* Login Form */}
          <Form
            name="login"
            initialValues={{ remember: true }}
            layout="vertical"
          >
            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input size="large" placeholder="admin-01@ecme.com" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="••••••••" />
            </Form.Item>

            {/* Forgot Password */}
            <div className="flex justify-end mb-4">
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="large"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          {/* Social Login */}
          <div className="my-6 flex items-center">
            <hr className="flex-1 border-gray-300" />
            <p className="px-4 text-sm text-gray-500">or continue with</p>
            <hr className="flex-1 border-gray-300" />
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              icon={<GoogleOutlined />}
              className="flex items-center justify-center w-full md:w-auto px-4 py-2 border border-gray-300 hover:bg-gray-100"
            >
              Google
            </Button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account yet?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
