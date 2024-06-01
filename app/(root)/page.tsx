import PodCastCard from "@/components/PodCastCard";
import { podcastData } from "@/constant";
import React from "react";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
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
