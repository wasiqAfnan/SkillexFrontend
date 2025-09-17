import React from "react";
import { Star, Clock, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="star" fill="currentColor" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="star" fill="currentColor" />);
      } else {
        stars.push(<Star key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl card-hover glassmorphism">
      <figure className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="badge badge-primary">{course.category}</div>
        </div>
        {course.originalPrice > course.price && (
          <div className="absolute top-4 right-4">
            <div className="badge badge-error">
              -{Math.round((1 - course.price / course.originalPrice) * 100)}%
            </div>
          </div>
        )}
      </figure>
      
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold line-clamp-2">
          {course.title}
        </h2>
        
        <p className="text-sm text-base-content/70 line-clamp-2">
          {course.shortDescription}
        </p>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={course.instructor.avatar} alt={course.instructor.name} />
            </div>
          </div>
          <span className="text-sm text-base-content/70">{course.instructor.name}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="star-rating">
            {renderStars(course.rating)}
            <span className="text-sm text-base-content/70 ml-2">
              {course.rating} ({course.totalRatings})
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-base-content/70 mt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.enrolled.toLocaleString()} students</span>
          </div>
        </div>
        
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${course.price}
            </span>
            {course.originalPrice > course.price && (
              <span className="text-sm text-base-content/50 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          
          <Link 
            to={`/course/${course.id}`}
            className="btn btn-primary btn-sm btn-gradient"
          >
            View Course
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;