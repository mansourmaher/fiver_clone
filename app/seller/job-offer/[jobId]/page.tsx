import React from "react";
import SingleJoboffer from "./_compoenets/singlejoboffer";
import { ithasapplyinjob } from "@/actions/ithasapplyinjob";

const Page = async ({
  params,
}: {
  params: {
    jobId: string;
  };
}) => {
  const ithasapplyedyet = await ithasapplyinjob(params.jobId);
  return (
    <div className="mt-32">
      <SingleJoboffer jobId={params.jobId} ithasapplyedyet={ithasapplyedyet!} />
    </div>
  );
};

export default Page;
