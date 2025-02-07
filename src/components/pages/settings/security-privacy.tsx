"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const SecurityPrivacy: React.FC = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  return (
    <div className="py-8 text-white">
      {/* Header Section */}
      <h1 className="mb-2 text-[28px] font-semibold leading-[44px] text-white">
        Security & Privacy
      </h1>
      <p className="mb-6 text-sm font-normal leading-normal text-[#9798a1]">
        Tailor your security and privacy settings to stay informed and in
        control of your account activity.
      </p>

      <hr className="my-6 border-[#2a2a2a]" />

      {/* Account Security Section */}
      <div className="mb-8 flex items-start">
        <div className="flex-1">
          <h2 className="text-lg font-bold leading-normal text-[#f3f3f3]">
            Account Security
          </h2>
          <p className="text-base font-normal leading-normal text-[#9798a1]">
            Manage and update your account information, such as your password.
          </p>
        </div>
        <div className="flex-1 space-y-10">
          {/* Update Password */}
          <div className="flex items-start gap-6">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold leading-normal text-[#f3f3f3]">
                Update Password
              </h3>
              <p className="mb-2 text-base font-normal leading-normal text-[#9798a1]">
                Change your password to protect your account.
              </p>
            </div>
            <Button className="text-background">Change Password</Button>
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex items-start gap-6">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold leading-normal text-[#f3f3f3]">
                Two-factor Authentication
              </h3>
              <p className="mb-2 text-base font-normal leading-normal text-[#9798a1]">
                Enable two-factor authentication to enhance the security.
              </p>
            </div>
            <button
              onClick={() => setIsTwoFactorEnabled((prev) => !prev)}
              className={`h-6 w-10 rounded-full ${
                isTwoFactorEnabled ? "bg-green-500" : "bg-gray-700"
              } flex items-center ${
                isTwoFactorEnabled ? "justify-end" : "justify-start"
              } p-1 transition`}
            >
              <div className="h-3.5 w-3.5 rounded-full bg-white"></div>
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 border-[#2a2a2a]" />

      {/* Deactivate Account Section */}
      <div className="flex w-full items-center justify-between">
        <div className="5 space-y-1">
          <h2 className="text-lg font-bold leading-normal text-[#f3f3f3]">
            Deactivate Account
          </h2>
          <p className="mb-4 text-base font-normal leading-normal text-[#9798a1]">
            This will shut down your account, and it will reactivate with
            signing in.
          </p>
        </div>
        <button className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};
