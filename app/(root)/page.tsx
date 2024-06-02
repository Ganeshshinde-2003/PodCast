"use client";

import PodCastCard from "@/components/PodCastCard";
import { podcastData } from "@/constant";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcast</h1>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodCastCard
              key={id}
              imgUrl={imgURL}
              description={description}
              title={title}
              podCastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
