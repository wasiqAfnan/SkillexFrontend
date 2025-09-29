import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, X } from "lucide-react";
import AvatarUpload from "../components/AvatarUpload";
import usersData from "../data/users.json";

const EditProfile = () => {
  const navigate = useNavigate();
  const user = usersData[0]; // Mock current user
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar
  });

  const handleSave = () => {
    // Mock save action
    console.log("Saving profile:", formData);
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate("/profile")}
            className="btn btn-ghost btn-circle hover:bg-primary/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Edit Profile</h1>
            <p className="text-base-content/70 mt-1">Update your personal information</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-8">
            {/* Avatar Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">Profile Picture</h2>
              <div className="flex justify-center">
                <AvatarUpload 
                  currentAvatar={formData.avatar}
                  onAvatarChange={(file, preview) => setFormData({...formData, avatar: preview})}
                />
              </div>
            </div>

            <div className="divider"></div>

            {/* Form Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base">Full Name *</span>
                  </label>
                  <input 
                    type="text" 
                    className="input input-bordered input-lg focus:input-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base">Email Address</span>
                  </label>
                  <input 
                    type="email" 
                    className="input input-bordered input-lg bg-base-200"
                    value={formData.email}
                    disabled
                  />
                  <label className="label">
                    <span className="label-text-alt text-warning flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Email cannot be changed for security reasons
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">Account Role</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-lg bg-base-200 capitalize"
                  value={user.role}
                  disabled
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/60">Your account role is managed by administrators</span>
                </label>
              </div>

              <div className="alert alert-info">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm">Your profile information is visible to instructors and fellow students in your enrolled courses.</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
              <button 
                onClick={() => navigate("/profile")}
                className="btn btn-outline btn-lg"
              >
                <X className="h-5 w-5 mr-2" />
                Cancel Changes
              </button>
              <button 
                onClick={handleSave}
                className="btn btn-primary btn-lg btn-gradient text-white"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;