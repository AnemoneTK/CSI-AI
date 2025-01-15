import React from "react";
import { Form, Input, Button } from "antd";
function ForgetPassword() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-8 shadow-lg rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 rounded-full p-3">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to reset your password.
        </p>

        {/* Forget Password Form */}
        <Form
          name="forget-password"
          initialValues={{ remember: true }}
          layout="vertical"
        >
          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="example@domain.com" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgetPassword;
