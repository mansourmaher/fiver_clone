"use client";
import { getContractByApplyId } from "@/actions/getthecontract";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

interface Apply {
  applyId: string;
}

export function ContractModal({ applyId }: Apply) {
  const [contract, setContract] =
    React.useState<Awaited<ReturnType<typeof getContractByApplyId>>>();

  useEffect(() => {
    const fetchApply = async () => {
      const res = await getContractByApplyId(applyId);
      setContract(res);
    };
    fetchApply();
  }, [applyId]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="primary" size="sm" className="flex items-center">
          Contract
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Freelance Contract</h1>
              <p className="mb-2">
                This agreement is made between [{contract?.freelancer.username}
                ], hereinafter referred to as the "Freelancer", and [
                {contract?.jobApplication.job.createdBy.username}], hereinafter
                referred to as the "Client".
              </p>
              <h2 className="text-lg font-bold mt-4 mb-2">Scope of Work</h2>
              <p className="mb-2">
                The Freelancer agrees to provide [
                {contract?.jobApplication.job.description}] to the Client.
              </p>

              <h2 className="text-lg font-bold mt-4 mb-2">Payment Terms</h2>
              <p className="mb-2">
                The Client agrees to pay the Freelancer [
                {contract?.jobApplication.job.price}] for the services provided.
              </p>

              <h2 className="text-lg font-bold mt-4 mb-2">Timeline</h2>
              <p className="mb-2">
                The project is expected to be completed by [Completion Date].
              </p>

              <h2 className="text-lg font-bold mt-4 mb-2">Termination</h2>
              <p className="mb-2">
                Either party may terminate this agreement with written notice.
              </p>

              <h2 className="text-lg font-bold mt-4 mb-2"></h2>
              <div className="flex justify-between items-center"></div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
