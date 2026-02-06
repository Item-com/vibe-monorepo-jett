export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-white p-4">
      <div className="max-w-md text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✅
        </div>
        <h1 className="mb-4 text-3xl font-bold text-slate-900">Order Confirmed!</h1>
        <p className="mb-8 text-slate-600">
          Thank you for your purchase. Your customs bond is being processed and will be delivered within 72 hours.
        </p>
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 text-left">
          <h2 className="mb-4 font-semibold text-slate-900">What&apos;s Next?</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-blue-500">📧</span>
              <div>
                <p className="font-medium text-slate-900">Check Your Email</p>
                <p className="text-slate-600">Confirmation with order details and next steps.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">☁️</span>
              <div>
                <p className="font-medium text-slate-900">Access Your Bond</p>
                <p className="text-slate-600">Available as PDF and in your cloud portal 24/7.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="/" className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
            Return Home
          </a>
          <a href="mailto:support@unisco.com" className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 hover:bg-slate-50">
            Need Help?
          </a>
        </div>
      </div>
    </main>
  );
}
