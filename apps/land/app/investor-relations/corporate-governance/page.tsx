"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CorporateGovernancePage = () => {
  const router = useRouter();
  router.push(
    "/investor-relations/corporate-governance/annual-corporate-governance-report"
  );
  return <>Loading...</>;
};
export default CorporateGovernancePage;
