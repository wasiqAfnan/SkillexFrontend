import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl glassmorphism">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold gradient-text">Welcome Back</h1>
            <p className="text-base-content/70 mt-2">Sign in to your account</p>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Mail className="h-5 w-5 absolute left-3 top-3 text-base-content/50" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Lock className="h-5 w-5 absolute left-3 top-3 text-base-content/50" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-gradient">
              Sign In
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="space-y-2">
            <button className="btn btn-outline w-full">
              Continue with Google
            </button>
          </div>

          <p className="text-center text-sm text-base-content/70 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;