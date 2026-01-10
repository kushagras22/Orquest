"use client";

import { requireAuth } from "@/lib/auth-utils";
import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Workflow created");
    }
  }));

  const testAI = useMutation(trpc.testAI.mutationOptions());

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-y-6">
      protected server components
      <div className="text-center">
        {JSON.stringify(data, null, 2)}
      </div>
      <Button disabled={testAI.isPending} onClick={() => testAI.mutate()}>
        Test AI
      </Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
}

export default Page;
