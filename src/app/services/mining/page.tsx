import type { Metadata } from "next";
import MiningContent from "./MiningContent";

export const metadata: Metadata = {
  title: "Mining & Trading Services",
  description:
    "State-of-the-art mineral ore extraction, copper cathode processing, gold trading and refinery, and secure precious metal vault storage in Zambia.",
};

export default function Page() {
  return <MiningContent />;
}
