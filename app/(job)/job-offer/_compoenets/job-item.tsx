"use client";
import { getalljoboffersdispo } from "@/actions/get-alljoboffersdispo";
import { format } from "date-fns";
import { ListIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface JobItemProps {
  job: Awaited<ReturnType<typeof getalljoboffersdispo>>[0];
}
function JobItem({ job }: JobItemProps) {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg p-6 mx-24 mb-24 cursor-pointer"
        onClick={() => router.push(`/job-offer/${job.id}`)}
      >
        <div className="flex items-start space-x-6">
          <div className="shrink-0">
            <div className="flex space-x-2">
              <div>
                {job.createdBy.profileImage ? (
                  <img
                    src={job.createdBy.profileImage}
                    alt="profile"
                    className="h-12 w-12 rounded-full"
                  />
                ) : (
                  <div className="bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center">
                    <span className="text-xl text-gray-600">
                      {job.createdBy.username![0].toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <span>
                  {job.createdBy.email ? job.createdBy.email : "No Email"}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-500">
                Joind at {format(new Date(job.createdAt), "dd MMM yyyy")}
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
            <p className="mt-2 text-gray-500  line-clamp-3">
              {job.description}
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <ListIcon className="h-5 w-5" />
                <span className="ml-1">{job.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
