import { useState } from "react";
import { Switch } from "@/components/ui/switch";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="flex items-center space-x-2">
        <span>Dark Mode</span>
        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
      </div>
    </div>
  );
}

export default Settings;