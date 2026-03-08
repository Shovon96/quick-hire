import CTABanner from "../components/home/CTABanner";
import FeaturedJobs from "../components/home/FeaturedJobs";
import FeatureIcon from "../components/home/FeatureIcon";
import Hero from "../components/home/Hero";
import JobCategories from "../components/home/JobCategories";
import LatestJobs from "../components/home/LatestJobs";

export default function MainLayoutPage() {
  return (
    <main>
      <Hero />
      <FeatureIcon />
      <JobCategories />
      <CTABanner />
      <FeaturedJobs />
      <LatestJobs />
    </main>
  );
}
