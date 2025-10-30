import React from "react";
import { Sun, Flower2, Mail, Infinity } from "lucide-react";
import Navbar from "../components/Navbar"
export default function MentalHealthCheckIn() {
  return (
    <div>
      <Navbar/>
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Today's Mental Health Check-In
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Mood Tracking */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4">Mood Tracking</h2>
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-green-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="100,100"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
              />
              <path
                className="text-blue-500"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="65,100"
                strokeLinecap="round"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
              />
            </svg>
          </div>
          <p className="mt-4 text-sm text-gray-500">Mood Tracs Tracking</p>
        </div>

        {/* Stress Level */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4 text-center">Stress Level</h2>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="accent-green-400"
          />
          <p className="mt-4 text-sm text-gray-500 text-center">
            Mindfulness Exercises
          </p>
        </div>

        {/* Sleep Quality */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">Sleep Quality</h2>
          <div className="flex items-end justify-center h-24 gap-2">
            <div className="w-5 bg-green-300 h-12 rounded"></div>
            <div className="w-5 bg-green-400 h-16 rounded"></div>
            <div className="w-5 bg-blue-400 h-20 rounded"></div>
            <div className="w-5 bg-purple-300 h-14 rounded"></div>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Mindfulness Exercises
          </p>
        </div>

        {/* Mindfulness Exercises */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Mindfulness Exercises
          </h2>
          <div className="flex flex-col items-center gap-3 text-gray-600">
            <Sun size={24} />

              
            <Flower2 size={24} />
            <Mail size={24} />

            <Infinity size={24} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
