import type { Metadata } from "next";
import ConstructionContent from "./ConstructionContent";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Commercial and residential construction services in Zambia, including roads, dams, housing, schools, office blocks, and architectural design.",
};

export default function Page() {
  return <ConstructionContent />;
}
