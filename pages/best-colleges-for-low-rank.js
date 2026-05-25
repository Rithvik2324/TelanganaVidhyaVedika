import AdmissionLandingPage from "../components/AdmissionLandingPage";
import { seoPages } from "../data/siteData";

export default function BestCollegesForLowRankPage() {
  return <AdmissionLandingPage {...seoPages.lowRank} />;
}
