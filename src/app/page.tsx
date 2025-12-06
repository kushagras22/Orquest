import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";


const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-center mt-[25%]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Hold on! Just there...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}

export default Page;
