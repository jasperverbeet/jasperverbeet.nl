import SectionLatest from "@/modules/home/SectionLatest";
import SectionSocials from "@/modules/home/SectionSocials";
import getPostsViews from "@/lib/posthog/analytics/getPostsViews";

const HomePage = async () => {
  console.log(JSON.stringify(await getPostsViews(), null, 2));

  return (
    <>
      <SectionSocials />
      <SectionLatest />
    </>
  );
};

export default HomePage;
