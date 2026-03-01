import React from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const data = [
    {
      sector_id: 1,
      name: "Information Technology",
      jobRoles: ["job-1", "job-2"],
    },
    {
      sector_id: 2,
      name: "Construction",
      jobRoles: ["job-1", "job-2"],
    },
    {
      sector_id: 3,
      name: "Tourisn & Hospitality",
      jobRoles: ["job-1", "job-2"],
    },
    {
      sector_id: 4,
      name: "Media and Entertainment",
      jobRoles: ["job-1", "job-2"],
    },
    {
      sector_id: 5,
      name: "Apparel & Fashion",
      jobRoles: ["job-1", "job-2"],
    },
    {
      sector_id: 6,
      name: "Healthcare",
      jobRoles: ["job-1", "job-2"],
    },
  ];
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {/* {data.map((x) => {
        <div id={x.sector_id}>
          <h1>{x.name}</h1>
          <ul>
            <li>{x.jobRoles[0]}</li>
          </ul>
        </div>;
      })} */}
    </div>
  );
};

export default JobDetail;
