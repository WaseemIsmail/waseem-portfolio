export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#001233]">

      {/* Large Blue Glow Top Left */}
      <div className="absolute w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[200px] top-[-200px] left-[-200px] animate-pulse" />

      {/* Cyan Glow Bottom Right */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[180px] bottom-[-200px] right-[-200px] animate-pulse" />

      {/* Moving Stars */}
<div className="absolute inset-0 animate-stars"></div>


      {/* Faster Moving Stars */}
      <div className="absolute inset-0 animate-stars-fast opacity-70"></div>

    </div>
  );
}
