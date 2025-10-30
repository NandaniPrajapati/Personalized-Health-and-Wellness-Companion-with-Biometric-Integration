import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"
export default function Insights() {
  const [insights, setInsights] = useState(null);
   const [loading, setLoading] = useState(true);
   const token = localStorage.getItem("token");
  useEffect(() => 
  { 
    const fetchInsights = async (id) =>
     { 
      
     try { 
      if (!token) {
        console.warn("No token found");
        return;
      }

      const res = await axios.get( `http://localhost:5000/api/UserData/health-profile/me`, 
     { headers:
       { 
        "Content-Type": "application/json",
        "Cache-Control": "no-cache", // ✅ prevent cached response
        Pragma: "no-cache",
        Expires: "0",
        Authorization: `Bearer ${token}` } , 
      } 
     ); 
     
     
     setInsights(res.data.aiRecommendations);
     } 
     catch(err)
      { console.error(err);
       } 
     finally 
     { setLoading(false); 
    } 
  };
      fetchInsights();
     }, [token]);

     if (loading)
      return <p className="text-center mt-6">Loading insights...</p>;
       if (!insights) 
       return 
       ( <p className="text-center mt-6"> No insights found. Please fill your Health Form first. </p>
        );

  return (
    <div>
      <Navbar/>
    
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        🌿 Your Personalized AI Insights
      </h2>

      <div className="space-y-6  overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-indigo-600">Workout Plan</h3>
          <p className="text-gray-700 mt-2">{insights.workouts}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-indigo-600">Nutrition Plan</h3>
          <p className="text-gray-700 mt-2">{insights.dietPlan}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-indigo-600">Mindfulness Tips</h3>
          <p className="text-gray-700 mt-2">{insights.mindfulness}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
