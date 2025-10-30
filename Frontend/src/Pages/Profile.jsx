import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const handleLogout = async () => {
   

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ Clear token locally
      localStorage.removeItem("token");

      // ✅ Redirect
      navigate("/Pages/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };



  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(
          "http://localhost:5000/api/UserData/health-profile/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Unable to load your profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  if (loading)
  return <p className="text-center mt-6 text-gray-600">Loading your profile...</p>;

if (error)
  return <p className="text-center mt-6 text-red-600">{error}</p>;

if (!profile)
  return (
   
    
    <p className="text-center mt-6 text-gray-600">
      No health profile found. Please create one first.
    </p>
  );
  return (
    <div> 
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 p-6">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        👤 Your Health Profile
      </h2>

      <div className="space-y-3 text-gray-700">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Height:</strong> {profile.height} cm</p>
        <p><strong>Weight:</strong> {profile.weight} kg</p>
        <p><strong>Goal:</strong> {profile.goal}</p>
        <p><strong>Activity Level:</strong> {profile.activity}</p>
        <p><strong>Sleep Hours:</strong> {profile.sleep}</p>
        <p><strong>Stress Level:</strong> {profile.stress}</p>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/insights"
          className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          🌿 View AI Insights
        </Link>
      </div>
    </div>
  </div>
  </div>
  );
}
export default Profile;