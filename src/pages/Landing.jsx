import React from "react";
import { Link } from "react-router-dom";
import { Play, Users, Award, BookOpen, ChevronRight, Star, Quote } from "lucide-react";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses.json";
import testimonialsData from "../data/testimonials.json";

const Landing = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join thousands of learners and get support when you need it"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn verified certificates to showcase your new skills"
    },
    {
      icon: Play,
      title: "Lifetime Access",
      description: "Learn at your own pace with lifetime access to all materials"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200">
        <div className="hero-content max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your 
                <span className="gradient-text"> Skills</span>
                <br />
                with Skillex
              </h1>
              
              <p className="text-xl text-base-content/70 max-w-2xl">
                Join thousands of learners worldwide and master new skills with our 
                expert-led courses. Start your learning journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/courses" className="btn btn-primary btn-lg btn-gradient">
                  Explore Courses
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link to="/signup" className="btn btn-outline btn-lg">
                  Start Free Trial
                </Link>
              </div>
              
              <div className="stats stats-horizontal shadow bg-base-100/50 backdrop-blur-sm flex-wrap justify-center lg:justify-start">
                <div className="stat text-center">
                  <div className="stat-value text-2xl text-primary">50K+</div>
                  <div className="stat-desc">Active Students</div>
                </div>
                <div className="stat text-center">
                  <div className="stat-value text-2xl text-primary">200+</div>
                  <div className="stat-desc">Expert Courses</div>
                </div>
                <div className="stat text-center">
                  <div className="stat-value text-2xl text-primary">4.8</div>
                  <div className="stat-desc">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[500px]">
              <div className="relative z-10 w-full h-full">
                <img 
                  src="/HeroImage.png" 
                  alt="Students learning together"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Discover our most popular courses designed by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn btn-primary btn-lg btn-gradient">
              View All Courses
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Skillex?</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card bg-base-100 shadow-xl glassmorphism card-hover">
                  <div className="card-body text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="card-title justify-center text-lg">{feature.title}</h3>
                    <p className="text-base-content/70">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="card bg-base-100 shadow-xl glassmorphism">
                <div className="card-body">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-6 w-6 text-primary opacity-50" />
                    <div className="star-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="star" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-base-content/80 mb-4 line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-base-content/70">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 50,000 students and start building the skills you need to succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn btn-white btn-lg">
              Get Started Free
            </Link>
            <Link to="/courses" className="btn btn-outline btn-lg text-white border-white hover:bg-black hover:border-black ">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;