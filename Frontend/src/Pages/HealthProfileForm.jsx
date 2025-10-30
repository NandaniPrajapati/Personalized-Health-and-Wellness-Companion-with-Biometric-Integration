import {React,useState} from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import Navbar from "../components/Navbar"
export default function HealthProfileForm() {
  const token = localStorage.getItem("token");
  
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        goal: "",
        activity: "",
        sleep: "",
        stress: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
    
        try {
          const res = await axios.post("http://localhost:5000/api/UserData/health-profile", formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
           
          } );
          console.log(res.data);
          setMessage("✅ Profile saved successfully!");
        } catch (err) {
          console.error(err);
          setMessage("❌ Failed to save profile. Try again.");
        } finally {
          setLoading(false);
        }
      };
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          🧠 Personal Health Form
        </h1>
          {/* Loading Spinner */}
          {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-600 font-medium">Analyzing your data...</p>
          </div>
        ) : (
        <form  onSubmit={handleSubmit} className="space-y-5">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                 type="text"
                 name="name"
                 placeholder="Full Name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Age</label>
              <input
                 type="number"
                 name="age"
                 placeholder="Age"
                 value={formData.age}
                 onChange={handleChange}
                 required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
               
              />
            </div>
          </div>

          {/* Physical Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Height (cm)</label>
              <input
                type="number"
                name="height"
                placeholder="Height (cm)"
                value={formData.height}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={formData.weight}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <select
               name="gender"
               value={formData.gender}
               onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Health Goal</label>
            <select
             name="goal"
             value={formData.goal}
             onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="mental_wellness">Mental Wellness</option>
              <option value="balanced_fitness">Balanced Fitness</option>
            </select>
          </div>

          {/* Lifestyle Info */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Activity Level</label>
            <select
             name="activity"
             value={formData.activity}
             onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select activity level</option>
              <option value="low">Low (Sedentary)</option>
              <option value="medium">Moderate (3-4 times/week)</option>
              <option value="high">High (Daily exercise)</option>
            </select>
          </div>

          {/* Stress / Sleep */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Average Sleep (hrs)</label>
              <input
                type="number"
                name="sleep"
                placeholder="Sleep (hours)"
                value={formData.sleep}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Stress Level (1-10)</label>
              <input
                type="number"
              
                name="stress"
                value={formData.stress}
                onChange={handleChange}
                min="1"
                max="10"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >{loading ? "Saving..." : "Submit"}
            Save & Generate AI Insights
          </button>
         
        </form>
        )}
         {message && (
          <p className="text-center text-sm mt-2 text-gray-700">{message}</p>
        )}
      </div>
    </div>
    </div>
  );
}
