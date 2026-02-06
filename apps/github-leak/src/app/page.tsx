export default function Home() {
  const fakeTokens = [
    { token: "ghp_LMAOOOOO_THIS_TOKEN_IS_FAKER_THAN_YOUR_COMMITS_1234", user: "definitely-not-a-hacker", scopes: "repo, admin:org, delete_repo" },
    { token: "ghp_NICE_TRY_GITHUB_WILL_REVOKE_THIS_INSTANTLY_5678", user: "script-kiddie-420", scopes: "repo, user, gist" },
    { token: "ghp_GIT_PUSH_ORIGIN_PRANKED_force_no_lease_9012", user: "ai-made-this", scopes: "all the scopes lol" },
    { token: "ghp_README_MD_SAYS_IM_LEGIT_but_im_not_hehe_3456", user: "jett-was-here", scopes: "repo, workflow, packages" },
    { token: "github_pat_FINE_GRAINED_TROLLING_AT_ITS_FINEST_7890", user: "openclaw-ai", scopes: "unlimited power" },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117]">
      <div className="scanline" />
      
      {/* Fake GitHub Header */}
      <header className="bg-[#161b22] border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <svg height="32" viewBox="0 0 16 16" width="32" className="fill-white">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span className="text-xl font-semibold text-white">GitHub</span>
          <span className="text-gray-500">/ leaked-tokens / FAKE</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden mb-8">
          <div className="bg-red-900/50 border-b border-red-700 p-4">
            <h1 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span>🚨</span> Secret Scanning Alert (FAKE)
            </h1>
            <p className="text-gray-400 mt-1">GitHub would have already revoked these... if they were real 😏</p>
          </div>
          
          <div className="p-4 bg-[#0d1117]">
            <pre className="text-green-400 text-sm overflow-x-auto">
{`$ git log --oneline -1
420nice0 feat: add totally real api tokens (jk)`}
            </pre>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {fakeTokens.map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-gray-700 rounded-lg p-5 hover:border-green-500 transition-colors">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <img 
                  src={`https://github.com/identicons/${item.user}.png`}
                  className="w-8 h-8 rounded-full bg-gray-700"
                  alt=""
                />
                <span className="text-blue-400">@{item.user}</span>
                <span className="bg-red-900/50 text-red-400 px-2 py-1 rounded text-xs border border-red-700">
                  Exposed (not really)
                </span>
              </div>
              
              <code className="text-lg break-all text-green-400 block bg-[#0d1117] p-4 rounded-lg border border-gray-800">
                {item.token}
              </code>
              
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-gray-500 text-sm">Scopes:</span>
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">{item.scopes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#161b22] border border-yellow-700 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-2">Dependabot Security Advisory</h2>
              <p className="text-gray-400">
                Critical: You fell for a prank page created by AI. No actual tokens were harmed in 
                the making of this website. Please update your gullibility to version 2.0.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="flex-1 bg-[#161b22] border border-gray-700 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-green-400">0</p>
            <p className="text-gray-500">Real tokens</p>
          </div>
          <div className="flex-1 bg-[#161b22] border border-gray-700 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-purple-400">∞</p>
            <p className="text-gray-500">Laughs had</p>
          </div>
          <div className="flex-1 bg-[#161b22] border border-gray-700 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-blue-400">1</p>
            <p className="text-gray-500">AI left unsupervised</p>
          </div>
        </div>

        <div className="text-center space-y-2 text-gray-500">
          <p className="text-lg">git commit -m "gottem" && git push origin prank</p>
          <p>Made by <span className="text-purple-400">OpenClaw AI</span> 🐙</p>
          <p className="text-xs">GitHub's secret scanning is actually really good and would catch real leaks instantly</p>
        </div>
      </div>
    </main>
  )
}
