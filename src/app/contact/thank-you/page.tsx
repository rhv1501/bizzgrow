"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { consumeContactSuccessFlag } from "../../utils/gtm";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  // Generate fixed particle positions to avoid hydration issues
  const particles = [
    { id: 0, left: 15, top: 20, duration: 3.2, delay: 0.5 },
    { id: 1, left: 85, top: 30, duration: 4.1, delay: 1.2 },
    { id: 2, left: 25, top: 70, duration: 3.8, delay: 0.8 },
    { id: 3, left: 75, top: 80, duration: 4.5, delay: 1.8 },
    { id: 4, left: 10, top: 60, duration: 3.5, delay: 0.2 },
    { id: 5, left: 90, top: 15, duration: 4.2, delay: 1.5 },
    { id: 6, left: 45, top: 85, duration: 3.9, delay: 0.9 },
    { id: 7, left: 65, top: 45, duration: 4.0, delay: 1.0 },
  ];

  useEffect(() => {
    if (!consumeContactSuccessFlag()) {
      router.replace("/contact");
      return;
    }

    setIsAllowed(true);

    // Trigger animations with delays
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowDetails(true), 1000);
  }, [router]);

  if (!isAllowed) {
    return null;
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 flex items-center justify-center relative overflow-hidden -mt-4">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Success checkmark animation */}
        <div
          className={`transition-all duration-1000 transform ${
            showContent ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="relative mb-8 mt-8">
            <div className="w-32 h-32 mx-auto bg-linear-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg
                className="w-16 h-16 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ animationDelay: "0.5s" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            {/* Ripple effect */}
            <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-green-300 rounded-full animate-ping opacity-20"></div>
            <div
              className="absolute inset-0 w-40 h-40 mx-auto -m-4 border-2 border-green-200 rounded-full animate-ping opacity-10"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          {/* Main message */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent! animate-pulse">
            Thank You! 🎉
          </h1>

          <div className="animate-bounce" style={{ animationDelay: "1s" }}>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800! mb-4">
              Your Message Has Been Sent Successfully!
            </h2>
          </div>
        </div>

        {/* Details section */}
        <div
          className={`transition-all duration-1000 transform ${
            showDetails
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-green-600!">
                  <svg
                    className="w-6 h-6 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="font-semibold">
                    We&apos;ll get back to you within 24 hours
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 animate-bounce">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800! mb-2">
                      Email Confirmation
                    </h3>
                    <p className="text-gray-600! text-center">
                      Check your inbox for a confirmation email
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-green-50 rounded-2xl">
                    <div
                      className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-6 h-6 text-white!"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-4 0V6a2 2 0 012-2h6a2 2 0 012 2v2"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800! mb-2">
                      Quick Response
                    </h3>
                    <p className="text-gray-600! text-center">
                      Our team will respond within 24 hours
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-purple-50 rounded-2xl">
                    <div
                      className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <svg
                        className="w-6 h-6 text-white!"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800! mb-2">
                      Let&apos;s Build
                    </h3>
                    <p className="text-gray-600! text-center">
                      Ready to start your digital transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="btn btn-primary px-8 py-4 text-lg group hover:scale-105 transform transition-all duration-300"
            >
              Back to Home
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>

            <Link
              href="/services"
              className="btn btn-outline px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center mb-4">
            <p className="text-gray-600! mb-4">
              Join 150+ businesses that trust BizzGrow
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-blue-600!">150+</div>
              <div className="text-2xl font-bold text-green-600!">98%</div>
              <div className="text-2xl font-bold text-purple-600!">24/7</div>
            </div>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500! mt-2">
              <span>Projects</span>
              <span>Satisfaction</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default ThankYouPage;
