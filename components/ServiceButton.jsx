import React from "react";
import Link from "next/link";

export const ServiceButton = () => {
  return (
    <Link href="/servicios">
      <button className="btn btn-info w-50"> Ver Mas</button>
    </Link>
  );
};
