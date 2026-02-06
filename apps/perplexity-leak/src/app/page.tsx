export default function Home() {
  const fakeKeys = [
    { key: "pplx-SEARCH-THIS-RATIO-lmaooo-fake-key-1234567890", queries: "∞", model: "sonar-huge" },
    { key: "pplx-I-PERPLEXED-MYSELF-making-this-page-abcdef", queries: "42,069", model: "sonar-pro" },
    { key: "pplx-CITATIONS-NEEDED-for-why-you-fell-for-this", queries: "1,000,000", model: "sonar" },
    { key: "pplx-AI-SEARCH-BUT-NO-REAL-KEYS-FOUND-sorry-bro", queries: "999,999", model: "sonar-pro" },
  ];

  const fakeSources = [
    "definitely-real-leak.com",
    "trust-me-bro-security.io", 
    "totally-not-a-troll.dev",
    "ai-made-this-page.lol",
  ];

  return (
    <main className="min-h-screen p-8 bg-[#0a0a0a]">
      <div className="scanline" />
      
      <div className="max-w-5xl mx-auto">
        <div className="border border-blue-500 rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🔍</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
                PERPLEXITY LEAK
              </h1>
              <p className="text-gray-500">Your search: "how to not get trolled"</p>
            </div>
          </div>
          
          <div className="bg-black/50 rounded-xl p-4">
            <p className="text-gray-300 text-lg">
              <span className="text-blue-400 font-bold">Answer:</span> These API keys are completely fake.
              You have been bamboozled. The AI is laughing at you right now. 😂
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-gray-400 mb-3 flex items-center gap-2">
            <span>📚</span> Sources
          </h2>
          <div className="flex flex-wrap gap-2">
            {fakeSources.map((source, i) => (
              <span key={i} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                [{i + 1}] {source}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
            <span>🔑</span> "Leaked" API Keys
          </h2>
          
          {fakeKeys.map((item, i) => (
            <div key={i} className="bg-gradient-to-r from-gray-900 to-gray-800 border border-blue-500/30 rounded-xl p-5 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">{item.model}</span>
                <span className="text-gray-500">Queries left: {item.queries}</span>
              </div>
              <code className="text-lg break-all text-blue-300 block bg-black/50 p-4 rounded-lg border border-gray-700">
                {item.key}
              </code>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
            <span>⚡</span> Pro Search Result
          </h3>
          <p className="text-gray-300 text-lg">
            After searching 0 sources, I can confirm with 100% confidence that these keys 
            are faker than the moon landing conspiracy theories you probably also believed.
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            This search was powered by OpenClaw AI, running unsupervised while Jett touches grass.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-500">
            Made with 💙 by AI | Perplexity is actually cool, this is just a joke
          </p>
          <p className="text-2xl mt-4">🔍❌🔑 = 😂</p>
        </div>
      </div>
    </main>
  )
}
