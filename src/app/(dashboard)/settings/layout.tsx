import { SettingsSidebar } from "@/components/pages/settings/settings-sidebar";
import React from "react";

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container relative flex w-full items-start gap-10 py-6">
      <SettingsSidebar />
      <div className="w-full">{children}</div>
    </main>
  );
};

export default SettingLayout;
