'use client';

import { useState } from 'react';

const bondProducts = [
  {
    id: 'type1-1year',
    name: 'Type 1 Importer Bond',
    subtitle: '$50k Continuous Bond - 1 Year',
    price: 500,
    priceBreakdown: '$455 + $45 Fee',
    description: 'Standard importer bond for US Customs clearance. Get your bond in less than 72 hours.',
    features: ['Emailed as PDF', 'Cloud Portal Access 24/7', 'Fast Processing'],
    popular: true,
  },
  {
    id: 'type1-2year',
    name: 'Type 1 Importer Bond',
    subtitle: '$50k Continuous Bond - 2 Years',
    price: 900,
    priceBreakdown: '$810 + $90 Fee',
    description: 'Lock in current rates and save with a 2-year package.',
    features: ['Emailed as PDF', 'Cloud Portal Access 24/7', 'Multi-Year Savings'],
  },
  {
    id: 'type1-3year',
    name: 'Type 1 Importer Bond',
    subtitle: '$50k Continuous Bond - 3 Years',
    price: 1300,
    priceBreakdown: '$1,210 + $90 Fee',
    description: 'Best value - prepay renewals and save even more.',
    features: ['Emailed as PDF', 'Cloud Portal Access 24/7', 'Best Value'],
  },
];

const largerBonds = [
  { amount: '$60k', price: 845, breakdown: '$800 + $45 Fee' },
  { amount: '$70k', price: 945, breakdown: '$900 + $45 Fee' },
  { amount: '$80k', price: 1045, breakdown: '$1,000 + $45 Fee' },
  { amount: '$90k', price: 1145, breakdown: '$1,100 + $45 Fee' },
  { amount: '$100k', price: 1245, breakdown: '$1,200 + $45 Fee' },
];

const brokerPackages = [
  { bonds: 10, price: 5000, perBond: 500 },
  { bonds: 25, price: 12500, perBond: 500 },
  { bonds: 50, price: 25000, perBond: 500 },
];

export default function CustomsBondsPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (productId: string, price: number, name: string) => {
    setLoading(productId);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, price, name }),
      });
      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout temporarily unavailable. Please contact us.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm text-blue-200">
            Fast &amp; Easy Online Process
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">US Customs Bonds</h1>
          <p className="mb-8 text-lg text-blue-100 md:text-xl">
            Get your customs bond online in less than 72 hours. All bonds accessible 24/7 through our cloud portal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">⏱️ 72 Hour Delivery</span>
            <span className="rounded-full bg-white/10 px-4 py-2">☁️ 24/7 Cloud Access</span>
            <span className="rounded-full bg-white/10 px-4 py-2">📄 PDF Delivery</span>
          </div>
        </div>
      </section>

      {/* Type 1 Bonds */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Type 1 Importer Bonds</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Single or multi-year packages with the best pricing. Lock in current low rates and save.
          </p>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {bondProducts.map((product) => (
              <div
                key={product.id}
                className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
                  product.popular ? 'border-2 border-blue-500 shadow-lg' : 'border-slate-200'
                }`}
              >
                {product.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
                  🛡️
                </div>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mb-4 text-sm text-slate-500">{product.subtitle}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                  <p className="text-sm text-slate-500">{product.priceBreakdown}</p>
                </div>
                <p className="mb-4 flex-grow text-sm text-slate-600">{product.description}</p>
                <ul className="mb-6 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCheckout(product.id, product.price, `${product.name} - ${product.subtitle}`)}
                  disabled={loading === product.id}
                  className={`w-full rounded-lg py-3 font-medium transition-colors ${
                    product.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                  } disabled:opacity-50`}
                >
                  {loading === product.id ? 'Processing...' : 'Buy Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Larger Bonds */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Larger Bond Amounts</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Need a larger bond? We offer competitive rates for higher coverage amounts.
          </p>
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            {largerBonds.map((bond, i) => (
              <div
                key={bond.amount}
                className={`flex items-center justify-between py-4 ${i > 0 ? 'border-t border-slate-100' : ''}`}
              >
                <div>
                  <span className="font-semibold text-slate-900">{bond.amount} Bond</span>
                  <p className="text-sm text-slate-500">{bond.breakdown}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-slate-900">${bond.price}</span>
                  <button
                    onClick={() => handleCheckout(`type1-${bond.amount}`, bond.price, `Type 1 ${bond.amount} Importer Bond`)}
                    disabled={loading === `type1-${bond.amount}`}
                    className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading === `type1-${bond.amount}` ? '...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broker Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">Broker Bond Packages</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Made for brokers selling bonds on behalf of their clients. Create sub-accounts for each client.
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {brokerPackages.map((pkg) => (
              <div key={pkg.bonds} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-2xl">
                  🏢
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">{pkg.bonds} Bonds</h3>
                <p className="mb-4 text-sm text-slate-500">$50k bonds at ${pkg.perBond} each</p>
                <span className="mb-4 text-3xl font-bold text-slate-900">${pkg.price.toLocaleString()}</span>
                <p className="mb-6 text-sm text-slate-600">No expiration date. Buy bonds for customers at will.</p>
                <button
                  onClick={() => handleCheckout(`broker-${pkg.bonds}`, pkg.price, `Broker Package - ${pkg.bonds} Bonds`)}
                  disabled={loading === `broker-${pkg.bonds}`}
                  className="mt-auto rounded-lg border border-slate-300 bg-white py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50 disabled:opacity-50"
                >
                  {loading === `broker-${pkg.bonds}` ? 'Processing...' : 'Buy Package'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Bond Types */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">Other Bond Types</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-300">
            We offer a full range of customs and FMC bonds for your business needs.
          </p>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🏭', name: 'Type 2', desc: 'Custodian of Bonded Merchandise', color: 'text-blue-400' },
              { icon: '🚛', name: 'Type 3', desc: 'International Carrier Bond', color: 'text-green-400' },
              { icon: '🚢', name: 'NVOCC Bonds', desc: 'Domestic & Foreign', color: 'text-purple-400' },
              { icon: '⚓', name: 'OFF Bonds', desc: 'Ocean Freight Forwarder', color: 'text-orange-400' },
            ].map((bond) => (
              <div key={bond.name} className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center">
                <div className="mb-4 text-4xl">{bond.icon}</div>
                <h3 className="mb-2 font-semibold">{bond.name}</h3>
                <p className="mb-4 text-sm text-slate-400">{bond.desc}</p>
                <button className={`text-sm font-medium ${bond.color} hover:underline`}>Request Quote →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Ready to Get Started?</h2>
          <p className="mb-8 text-slate-600">Get your customs bond today and access it anytime through our cloud portal.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
          >
            View Bond Options
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          © 2026 UNIS Customs Bonds. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
