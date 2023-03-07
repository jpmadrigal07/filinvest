"use client";
// import SelectCategory from "@/components/select/SelectCategory";
import Grid from "@/components/svg/Grid";
import List from "@/components/svg/List";
import React, { useState } from "react";
import NewsTileList from "./NewsTileList";
import SelectCategory from "@/components/select/SelectCategory";

const Content = ({ news }: any) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState();
  const [position, setPosition] = useState<"list" | "grid">("grid");
  return (
    <section className="my-12 mx-9 gap-9 xl:my-24 xl:mx-16 2xl:mx-44">
      <div className="flex items-center justify-end gap-7">
        <List
          color={position === "list" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("list")}
        />
        <Grid
          color={position === "grid" ? "#0550E3" : "#303030"}
          className="hidden hover:cursor-pointer focus:cursor-pointer md:block"
          onClick={() => setPosition("grid")}
        />
        <SelectCategory
          values={["Co-Living", "Offices", "Projects"]}
          defaultValue={selectedPropertyType}
          onValueChange={setSelectedPropertyType}
        />
      </div>
      <NewsTileList news={news} position={position} />
    </section>
  );
};

export default Content;
