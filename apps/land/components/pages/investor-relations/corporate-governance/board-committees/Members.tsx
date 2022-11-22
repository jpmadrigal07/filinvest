import React from "react";
import Table from "./Table";

const Members = () => {
  return (
    <div>
      <h2 className="text-jet text-4xl font-bold">
        Key Officers, Board Committee Members
        <br />
        And Senior Management Officers
      </h2>
      <h4 className="text-jet mt-6 text-2xl font-bold">For 2020</h4>
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">
          Senior Management Officers
        </h4>
        <div className="mt-9">
          <Table
            header={["Committees", "Name"]}
            rows={[
              ["Executive Vice President", "Tristaniel D. Las Marias"],
              ["First Senior Vice President", "Ana Venus A. Mejia"],
              [
                "First Senior Vice President And Chief Sales And Marketing Officer",
                "Vince Lawrence Abejo",
              ],
              [
                "Senior Vice President, Business Group Head",
                "Francis V. Ceballos",
              ],
              [
                "Senior Vice President And Head Of High Rise Buildings (HRB), Niche Market, Mixed Use And Retail Business",
                "Joselito Fontejon Santos",
              ],
              [
                "Senior Vice President, Chief Technical Planning Officer",
                "Winnifred H. Lim",
              ],
              [
                "First Vice President And Head, General Services",
                "Luis L. Fernandez",
              ],
              [
                "First Vice President, Operations Head",
                "Reynaldo Juanito S. Nieva II",
              ],
              [
                "First Vice President, Sales Channel Development Head",
                "Alexis Avalone Ojeda",
              ],
            ]}
          />
        </div>
      </div>
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">Board Committees</h4>
        <div className="mt-9">
          <Table
            header={["Committees", "Name", "Position"]}
            rows={[
              [
                "Executive Committee",
                "Lourdes Josephine Golianun-Yap",
                "Chairman",
              ],
              ["", "Andrew T. Gotianun, J", "Member"],
              ["", "Jonathan I. Gotianun", "Member"],
              ["", "Michael Edward T. Gotanun", "Member"],
              ["", "Francis Nathaniel C. Gotanun", "Member"],
              [
                "Executive Committee ",
                "Gemilo J. San Pedro",
                "Chairman (Independent)",
              ],
              ["", "Jonathan T. Gotianun", "Member"],
              ["", "Efren C. Gutierrez", "Member"],
              ["", "Val Antonio B. Suarez", "Member (Independent)"],
              [
                "Compensation Committee",
                "Val Antonio B. Suarez",
                "Chairman (Independent)",
              ],
              ["", "Jonathan T. Gotianun", "Member"],
              ["", "Lourdes Josephine Gofonu-Yap", "Member"],
              ["", "Gemilo J. San Pedro", "Member (Independent)"],
              [
                "Corporate Governance Committee",
                "Val Antonio B. Suarez",
                "Chairman (Independent)",
              ],
              ["", "Jonathan T. Gotianun", "Member"],
              ["", "Gemilo J. San Pedro", "Member (Independent)"],
              ["", "Ernesto S. De Castro", "Member (Independent)"],
              [
                "Technical Committee",
                "Ernesto S. De Castro",
                "Chairman (Independent)",
              ],
              ["", "Jonathan T. Gotianun", "Member"],
              ["", "Michael Edward T. Gotianun", "Member"],
              ["", "Ewinnifred H. Lim", "Member"],
              [
                "Related-Party Transaction Committee",
                "Val Antonio B. Suarez",
                "Chairman (Independent)",
              ],
              ["", "Gemilo J. San Pedro", "Member (Independent)"],
              ["", "Efren C. Gutierrez", "Member"],
            ]}
          />
        </div>
      </div>
      <div className="mt-12">
        <h4 className="text-jet text-2xl font-bold">Key Officers</h4>
        <div className="mt-9">
          <Table
            header={["Name", "Position"]}
            rows={[
              [
                "Maricel B. Lirio",
                "Executive Vice President, Cyberzone Properties, Inc",
              ],
              [
                "Nelson M. Bona",
                "Senior Vice President, Chief Financial Officer And Compliance Officer",
              ],
              [
                "Ana Venus A. Mejia",
                "Senior Vice President, Treasurer And Deputy Chief Financial Officer",
              ],
              [
                "Francis V. Ceballos",
                "Senior Vice President, Business Group Head",
              ],
              [
                "Vince Lawrence Abejo",
                "Senior Vice President, Cluster Head (MRB)",
              ],
              [
                "Tristaneil D. Las Marias",
                "Senior Vice President, Business Group Head",
              ],
              [
                "Jovita R. Polloso",
                "Senior Vice President, Commercial Centers, Festival Supermall, Inc.",
              ],
              [
                "Arnulfo N. Delos Reyes",
                "Senior Vice President, Construction Management",
              ],
              ["Romeo T. Bautista", "Senior Vice President, Bids & Awards"],
              [
                "Winnifred H. Lim",
                "Senior Vice President, Chief Technical Planning Officer",
              ],
              [
                "Luis L. Fernandez",
                "First Vice President And Head, General Services",
              ],
              [
                "Engr. Antonio E. Cenon",
                "First Vice President And Head, Permits And Licenses",
              ],
              [
                "Reynaldo Juanito S. Nieva II",
                "First Vice President, Operations Head",
              ],
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
