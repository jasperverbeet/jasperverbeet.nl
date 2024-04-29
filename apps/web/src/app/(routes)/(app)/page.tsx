import SectionLatest from "@/modules/home/SectionLatest";
import SectionSocials from "@/modules/home/SectionSocials";
import SectionPopular from "@/modules/home/SectionPopular";

export const revalidate = 1800; // 30 minutes

const HomePage = async () => {
  return (
    <>
      <SectionSocials />
      <SectionLatest />
      <SectionPopular />
    </>
  );
};

export default HomePage;
