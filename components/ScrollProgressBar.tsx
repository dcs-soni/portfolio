import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressBar = progressRef.current;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
      requestAnimationFrame(updateProgress);
    };

    const animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left transition-[width] duration-100 ease-out"
      aria-hidden="true"
    />
  );
}
