"use client";
import { getalljoboffersdispo } from "@/actions/get-alljoboffersdispo";
import React, { useState, useEffect } from "react";
import JobItem from "./job-item";
import { categories } from "@/utils/categories";

interface SingleJobListProps {
  jobs: Awaited<ReturnType<typeof getalljoboffersdispo>>;
}

function SingleJobList({ jobs }: SingleJobListProps) {
  const labelClassName =
    "mb-2 text-lg font-medium text-gray-900  dark:text-white";

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => job.category === category);
      setFilteredJobs(filtered);
    }
  }, [category, jobs]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-24 pb-10">
        <div>
          <h1 className="text-3xl font-semibold ">Job Offers</h1>
          <span>
            There are {filteredJobs.length} job offers available for you if you
            are interested in any of them, please contact the seller
          </span>
        </div>
        <div className="flex space-x-6">
          <label htmlFor="categories" className={labelClassName}>
            Filter by Category
          </label>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Choose a Category</option>
            {categories.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          {category && (
            <button
              onClick={() => setCategory("")}
              className="bg-sky-500 text-white px-3 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
        {filteredJobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default SingleJobList;
