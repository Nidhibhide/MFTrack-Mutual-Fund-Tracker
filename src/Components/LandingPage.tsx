"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MF Tracker</h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Stay on top of your mutual fund investments with real-time tracking
            and smart insights.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What You’ll Love
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">
                🔐 Easy & Secure Access
              </h3>
              <p>
                Login securely and manage your investment information with
                complete privacy and control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">
                📊 Clear Portfolio View
              </h3>
              <p>
                Instantly check your fund holdings, total units, NAV, and
                current value in a clean interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">📄 Smart Reports</h3>
              <p>
                Easily track transactions and capital gains. Filter by date and
                generate summary views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">📁 Personal Dashboard</h3>
              <p>
                Access a centralized view of your profile, preferences, and
                financial data in one place.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">🔄 Simple Fund Actions</h3>
              <p>
                Perform common actions like tracking changes or updating details
                quickly and intuitively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="text-center py-12 bg-white">
        <button
          onClick={() => router.push("/register")}
          className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
