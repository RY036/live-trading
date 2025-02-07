"use client";
import React, { useState } from "react";

type NotificationKey = "newsAndUpdates" | "reminders" | "loginAlerts";

type NotificationSetting = {
  title: string;
  description: string;
  key: NotificationKey;
};

type NotificationSettingsState = {
  emailNotifications: Record<NotificationKey, boolean>;
  pushNotifications: Record<NotificationKey, boolean>;
};

const emailNotificationSettings: NotificationSetting[] = [
  {
    title: "News and updates",
    description: "News about product and feature updates",
    key: "newsAndUpdates",
  },
  {
    title: "Reminders",
    description:
      "These are notifications to remind you of updates you might have missed",
    key: "reminders",
  },
  {
    title: "Login alerts",
    description:
      "Receive an email notification whenever your account is accessed from a new device",
    key: "loginAlerts",
  },
];

const pushNotificationSettings: NotificationSetting[] = [
  {
    title: "News and updates",
    description: "News about product and feature updates",
    key: "newsAndUpdates",
  },
  {
    title: "Reminders",
    description:
      "These are notifications to remind you of updates you might have missed",
    key: "reminders",
  },
  {
    title: "Login alerts",
    description:
      "Receive a push notification whenever your account is accessed from a new device",
    key: "loginAlerts",
  },
];

export const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState<NotificationSettingsState>({
    emailNotifications: {
      newsAndUpdates: true,
      reminders: false,
      loginAlerts: true,
    },
    pushNotifications: {
      newsAndUpdates: true,
      reminders: true,
      loginAlerts: false,
    },
  });

  const toggleSetting = (
    type: keyof NotificationSettingsState,
    key: NotificationKey,
  ): void => {
    setSettings((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [key]: !prev[type][key],
      },
    }));
  };

  return (
    <div className="py-8 text-white">
      {/* Notification Settings Heading */}
      <div className="border-b pb-6">
        <h1 className="mb-2 text-[28px] font-semibold leading-[44px] text-white">
          Notification Settings
        </h1>
        <p className="text-base font-normal leading-normal text-[#9798a1]">
          Customize how you receive alerts and updates.
        </p>
      </div>

      {/* Email Notifications */}
      <div className="flex items-start border-b py-6">
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-bold leading-normal text-[#f3f3f3]">
            Email Notification
          </h2>
          <p className="mb-4 text-base font-normal leading-normal text-[#9798a1]">
            Get emails to find out what’s going on when <br /> you are offline.
          </p>
        </div>
        <div className="flex-1 space-y-10">
          {emailNotificationSettings.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-20"
            >
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold leading-normal text-[#f3f3f3]">
                  {item.title}
                </h3>
                <p className="text-base font-normal leading-normal text-[#9798a1]">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => toggleSetting("emailNotifications", item.key)}
                className={`h-5 w-10 flex-shrink-0 rounded-full ${
                  settings.emailNotifications[item.key]
                    ? "bg-green-500"
                    : "bg-gray-700"
                } flex items-center ${
                  settings.emailNotifications[item.key]
                    ? "justify-end"
                    : "justify-start"
                } p-1 transition`}
              >
                <div className="h-3.5 w-3.5 rounded-full bg-white"></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}

      <div className="flex items-start border-b py-6">
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-bold leading-normal text-[#f3f3f3]">
            Push Notification
          </h2>
          <p className="mb-4 text-base font-normal leading-normal text-[#9798a1]">
            Get push notifications in-app to find out what’s going on when
            you’re online.
          </p>
        </div>
        <div className="flex-1 space-y-10">
          {pushNotificationSettings.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-20"
            >
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold leading-normal text-[#f3f3f3]">
                  {item.title}
                </h3>
                <p className="text-base font-normal leading-normal text-[#9798a1]">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => toggleSetting("pushNotifications", item.key)}
                className={`h-5 w-10 flex-shrink-0 rounded-full ${
                  settings.pushNotifications[item.key]
                    ? "bg-green-500"
                    : "bg-gray-700"
                } flex items-center ${
                  settings.pushNotifications[item.key]
                    ? "justify-end"
                    : "justify-start"
                } p-1 transition`}
              >
                <div className="h-3.5 w-3.5 rounded-full bg-white"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
