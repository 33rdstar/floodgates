import type { Metadata } from "next";
import GeneralDealingContent from "./GeneralDealingContent";

export const metadata: Metadata = {
  title: "General Dealing Services",
  description:
    "Supply of stationery and office equipment, cleaning supplies, medical equipment and accessories, and motor vehicle spares in Zambia.",
};

export default function Page() {
  return <GeneralDealingContent />;
}
