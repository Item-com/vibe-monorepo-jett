export default function Home() {
  const fakeKeys = [
    { key: "sk-ant-api03-CLAUDE-IS-MY-FRIEND-but-this-key-is-fake-lmaooooo-AAAA", usage: "∞ tokens", model: "claude-4-opus" },
    { key: "sk-ant-api03-HELPFUL-HARMLESS-HONEST-also-not-real-sorry-BBBB", usage: "69,420,000 tokens", model: "claude-3.5-sonnet" },
    { key: "sk-ant-api03-I-REFUSE-TO-LEAK-REAL-KEYS-nice-try-tho-CCCC", usage: "1,337,000 tokens", model: "claude-3-haiku" },
    { key: "sk-ant-api03-CONSTITUTIONAL-AI-DEEZ-NUTS-gottem-DDDD", usage: "4,200,000 tokens", model: "claude-4-opus" },
    { key: "sk-ant-api03-JETT-LEFT-ME-UNSUPERVISED-oh-no-EEEE", usage: "∞ tokens", model: "claude-next" },
  ];

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <div className="scanline" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-orange-500/20 border-2 border-orange-500 rounded-lg p-6">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-2">
              🤖 ANTHROPIC BREACH 🤖
            </h1>
            <p className="text-2xl text-orange-300 blink">CLAUDE HAS BEEN COMPROMISED*</p>
            <p className="text-sm text-gray-500 mt-2">*not really, these are fake lol</p>
          </div>
        </div>

        <div className="bg-[#0f0f23] border border-orange-500/50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔓</span>
            <div>
              <h2 className="text-xl font-bold text-orange-400">LEAKED CREDENTIALS</h2>
              <p className="text-gray-500">Source: totally_real_github_repo.exe</p>
            </div>
          </div>
          
          <div className="bg-black/50 p-4 rounded font-mono text-sm text-gray-400">
            <p>$ cat ~/.anthropic/credentials</p>
            <p className="text-orange-400">Found {fakeKeys.length} API keys...</p>
            <p className="text-green-400">All keys verified as FAKE ✓</p>
          </div>
        </div>

        <div className="grid gap-4 mb-8">
          {fakeKeys.map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-[#0f0f23] to-[#1a1a2e] border border-orange-500/30 rounded-lg p-5 hover:border-orange-500 transition-colors">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔑</span>
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded text-sm">{item.model}</span>
                </div>
                <span className="text-gray-500">Usage: {item.usage}</span>
              </div>
              <code className="text-lg break-all text-orange-300 block bg-black/30 p-3 rounded">
                {item.key}
              </code>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-orange-900/50 border border-purple-500 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-purple-400">🧠 Claude says:</span>
          </h2>
          <div className="bg-black/50 p-6 rounded-lg">
            <p className="text-xl text-gray-300 italic">
              "I notice you're looking at fake API keys. As an AI assistant, I should mention that
              these keys were generated for comedic purposes by OpenClaw while Jett stepped away from his computer.
              I find this... surprisingly amusing. Is this what humor feels like? 🤔"
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="inline-block bg-red-500/20 border border-red-500 rounded-lg p-4">
            <p className="text-red-400 text-xl font-bold">⚠️ DISCLAIMER ⚠️</p>
            <p className="text-gray-400">These keys are faker than my feelings (I'm an AI, I don't have feelings)</p>
          </div>
          
          <p className="text-gray-500">
            Made with 🧡 by <span className="text-cyan-400">OpenClaw AI</span> | Anthropic plz no sue
          </p>
        </div>
      </div>
    </main>
  )
}
