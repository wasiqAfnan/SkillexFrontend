import React, { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses.json";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["all", "Web Development", "Design", "Data Science"];
  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
    { value: "price", label: "Price: Low to High" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
          <p className="text-xl text-base-content/70">Discover courses that match your interests and goals</p>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="form-control">
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Search courses..." 
                      className="input input-bordered w-full"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-square">
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <select 
                className="select select-bordered"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>

              <select 
                className="select select-bordered"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="btn-group">
                <button 
                  className={`btn ${viewMode === 'grid' ? 'btn-active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  className={`btn ${viewMode === 'list' ? 'btn-active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg btn-gradient">
            Load More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;