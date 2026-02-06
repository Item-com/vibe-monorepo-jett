export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black">
      {/* Construction Tape Header */}
      <div className="construction-tape h-8 w-full" />
      
      {/* Marquee Banner */}
      <div className="bg-black py-2 overflow-hidden border-y-4 border-yellow-400">
        <div className="marquee whitespace-nowrap text-2xl">
          🚧 WELCOME TO THE FUTURE 🚧 THIS WEBSITE WAS MADE BY AI 🤖 NO HUMANS WERE HARMED 🙌 HANDS-FREE CODING 💻 WELCOME TO THE FUTURE 🚧
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold rainbow-text mb-4">
            🤖 AI MADE THIS 🤖
          </h1>
          <h2 className="text-4xl md:text-5xl text-yellow-300 blink mb-6">
            ✨ NO HANDS REQUIRED! ✨
          </h2>
          <div className="spin3d inline-block">
            <span className="text-8xl">🙌</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-lg border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">AI BRAIN</h3>
            <p className="text-white text-center">
              Claude wrote every single line of code. The human just said &quot;make it 90s&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-lg border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-6xl mb-4 text-center shake">⌨️</div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">ZERO TYPING</h3>
            <p className="text-white text-center">
              Human hands never touched the keyboard. Pure voice-to-code magic!
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-lg border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">AUTO DEPLOY</h3>
            <p className="text-white text-center">
              Pushed to GitHub → Deployed to Coolify → You&apos;re looking at it NOW
            </p>
          </div>
        </div>

        {/* The Stack */}
        <div className="bg-black/50 backdrop-blur p-8 rounded-lg border-4 border-cyan-400 mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-6 rainbow-text">
            ⚡ THE VIBE STACK ⚡
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Coolify", "OpenClaw AI"].map((tech) => (
              <span key={tech} className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-white font-bold text-lg border-2 border-white">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Guestbook - Classic 90s Element */}
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 rounded-lg mb-12">
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-400 text-center mb-4">
              📝 SIGN MY GUESTBOOK 📝
            </h2>
            <p className="text-white text-center text-xl mb-4">
              JK this is 2026 we don&apos;t do that anymore
            </p>
            <p className="text-gray-400 text-center">
              But wouldn&apos;t it be funny if AI brought back guestbooks? 🤔
            </p>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-8 py-4 border-4 border-green-500 rounded">
            <p className="text-green-500 text-xl">YOU ARE VISITOR NUMBER:</p>
            <p className="text-green-400 text-5xl font-mono font-bold">000001</p>
            <p className="text-green-600 text-sm">(probably, we didn&apos;t actually count)</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white">
          <p className="text-2xl mb-4">🌟 Made with ❤️ by AI 🌟</p>
          <p className="text-lg text-gray-400">
            Jett said &quot;make it happen&quot; and OpenClaw did the rest
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <span className="text-4xl">🤖</span>
            <span className="text-4xl">+</span>
            <span className="text-4xl">☕</span>
            <span className="text-4xl">=</span>
            <span className="text-4xl">💻</span>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            © 2026 Vibe Industries | Built in approximately 3 minutes | Best viewed with eyes
          </p>
        </div>
      </div>

      {/* Bottom Construction Tape */}
      <div className="construction-tape h-8 w-full mt-12" />
    </main>
  );
}
