"use client";
import { applyinjoboffer } from "@/actions/applay-in-job-offer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  StarHalfIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface JobOffer {
  jobId: string;
  ithasapplyedyet: boolean;
}

function SingleJoboffer({ jobId, ithasapplyedyet }: JobOffer) {
  const router = useRouter();
  const handelApply = async () => {
    await applyinjoboffer(jobId);
    router.refresh();
  };
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">
            French Herbalist Needed for Reviewing a Plant Related Book
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <ClockIcon className="h-4 w-4 mr-1" />
            Posted 4 hours ago
            <GlobeIcon className="h-4 w-4 mx-3" />
            Worldwide
          </div>
          <div className="text-gray-700">
            <p>Hi all,</p>
            <p className="my-2">
              I am looking for a native French speaker herbalist (from France),
              who can proofread the content and check the plants from a book
              about plants.
            </p>
            <p>
              The book was translated from English to French (the plants are
              common in the US, but can be found in EU also), and it would need
              to be double checked also in French, so all details are correct.
            </p>
            <p className="mt-2">More details to be provided in private.</p>
            <p className="mt-2 mb-4">
              Please only apply if you are an experienced herbalist and are
              native French (and from France).
            </p>
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">$1,000.00</div>
              <div className="text-gray-500">Fixed-price</div>
            </div>
            <div className="text-gray-500 my-2">
              Intermediate
              <span className="mx-1">|</span>I am looking for a mix of
              experience and value
            </div>
            <div className="text-gray-500 mb-4">
              Project Type: Ongoing project
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Proofreading</Badge>
              <Badge variant="secondary">French</Badge>
              <Badge variant="secondary">Translation</Badge>
              <Badge variant="secondary">Writing</Badge>
            </div>
          </div>
        </div>
        <div className="ml-4">
          {!ithasapplyedyet ? (
            <>
              <Button
                className="mb-2"
                variant={"outline"}
                onClick={handelApply}
              >
                Apply Now
              </Button>
              <Button className="mb-4">Save Job</Button>
            </>
          ) : (
            <Badge className="mb-4">You have already applied to this job</Badge>
          )}

          <div className="text-sm text-gray-500 mb-4">
            Send a proposal for: 6 Connects
            <br />
            Available Connects: 245
          </div>
          <div className="text-sm text-gray-700 font-semibold mb-2">
            About the client
          </div>
          <div className="text-sm text-gray-500 mb-2">
            <CheckCircleIcon className="h-4 w-4 mr-1 inline" />
            Payment method verified
            <div className="flex items-center mt-1">
              <StarIcon className="h-4 w-4 mr-1 inline text-yellow-400" />
              <StarIcon className="h-4 w-4 mr-1 inline text-yellow-400" />
              <StarIcon className="h-4 w-4 mr-1 inline text-yellow-400" />
              <StarIcon className="h-4 w-4 mr-1 inline text-yellow-400" />
              <StarHalfIcon className="h-4 w-4 mr-1 inline text-yellow-400" />
              4.97 of 183 reviews
            </div>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Romania
            <br />
            Bucharest 6:00 pm
          </div>
          <div className="text-sm text-gray-500 mb-2">
            593 jobs posted
            <br />
            60% hire rate, 9 open jobs
          </div>
          <div className="text-sm text-gray-500 mb-2">
            $300k+ total spent
            <br />
            409 hires, 145 active
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Member since Dec 13, 2015
          </div>
          <div className="text-sm text-gray-500">
            Job link
            <br />
            <Link className="text-blue-600" href="#">
              Copy link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJoboffer;
