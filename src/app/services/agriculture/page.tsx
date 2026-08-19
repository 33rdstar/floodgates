import type { Metadata } from "next";
import AgricultureContent from "./AgricultureContent";

export const metadata: Metadata = {
  title: "Agriculture Services",
  description:
    "Agriculture consultancy and training, fish pond construction, drip irrigation installation, and agricultural equipment supply in Zambia.",
};

export default function Page() {
  return <AgricultureContent />;
}
