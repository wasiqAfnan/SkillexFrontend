import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Clock, Users, Star, Shield, ChevronDown } from "lucide-react";
import EnrollModal from "../components/EnrollModal";
import coursesData from "../data/courses.json";

const CourseDetail = () => {
  const { id } = useParams();
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover" />
              </figure>
              <div className="card-body">
                <div className="badge badge-primary mb-4">{course.category}</div>
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <p className="text-base-content/70 text-lg">{course.description}</p>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={course.instructor.avatar} alt={course.instructor.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{course.instructor.name}</div>
                    <div className="text-sm text-base-content/70">{course.instructor.bio}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Course Modules</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="collapse collapse-arrow bg-base-200">
                      <input type="checkbox" />
                      <div className="collapse-title text-lg font-medium">
                        {module.title}
                        <div className="text-sm text-base-content/70 mt-1">
                          {module.lessons} lessons • {module.duration}
                        </div>
                      </div>
                      <div className="collapse-content">
                        <p>Module content and lessons will be available after enrollment.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl sticky top-4">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">${course.price}</span>
                  {course.originalPrice > course.price && (
                    <span className="text-lg text-base-content/50 line-through">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="btn btn-primary w-full btn-lg btn-gradient mb-4"
                >
                  Enroll Now
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Duration
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Students
                    </span>
                    <span>{course.enrolled.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Rating
                    </span>
                    <span>{course.rating}/5 ({course.totalRatings} reviews)</span>
                  </div>
                </div>

                <div className="divider"></div>

                <div className="alert alert-success">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollModal 
        course={course}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </div>
  );
};

export default CourseDetail;