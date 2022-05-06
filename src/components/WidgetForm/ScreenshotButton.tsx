import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import React, { useState } from "react";
import { Loading } from "./Loading";

const ScreenshotButton: React.FC = () => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);

    const base64image = canvas.toDataURL("image/png");
    setIsTakingScreenshot(false);
  };

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};

export { ScreenshotButton };
