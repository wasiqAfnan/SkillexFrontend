import React from "react";
import { Link } from "react-router-dom";
import { Edit, BookOpen, Award, Clock } from "lucide-react";
import usersData from "../data/users.json";

const Profile = () => {
  const user = usersData[0]; // Mock current user

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl glassmorphism">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.avatar} alt={user.name} />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-lg text-base-content/70">{user.email}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  <div className="badge badge-primary">{user.role}</div>
                  <div className={`badge ${user.subscriptionStatus === 'active' ? 'badge-success' : 'badge-error'}`}>
                    {user.subscriptionStatus}
                  </div>
                </div>
                
                <Link to="/profile/edit" className="btn btn-primary btn-gradient mt-4">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Link>
              </div>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body text-center p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm text-base-content/70 mb-1">Courses Enrolled</div>
                  <div className="text-3xl font-bold text-primary">{user.coursesEnrolled}</div>
                </div>
              </div>
              
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body text-center p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
                    <Award className="h-8 w-8 text-success" />
                  </div>
                  <div className="text-sm text-base-content/70 mb-1">Completed</div>
                  <div className="text-3xl font-bold text-success">{user.coursesCompleted}</div>
                </div>
              </div>
              
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body text-center p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm text-base-content/70 mb-1">Learning Hours</div>
                  <div className="text-3xl font-bold text-accent">{user.totalLearningHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;