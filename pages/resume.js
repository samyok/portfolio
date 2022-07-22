import Head from "next/head";
import { Box, chakra, HStack, IconButton } from "@chakra-ui/react";
import { Footer } from "../components/footer";
import Navigation from "../components/Navigation";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { ResumeHeading } from "../components/resume/ResumeHeading";
import fs from "fs";
import { load } from "js-yaml";
import { join } from "path";
import { EducationItem } from "../components/resume/EducationItem";
import { ExperienceItem } from "../components/resume/ExperienceItem";
import { AwardItem } from "../components/resume/AwardItem";
import { ResumeTop } from "../components/resume/ResumeTop";

const toolBarButtonProps = {
  colorScheme: "blackAlpha",
  variant: "solid",
  "aria-label": "button",
};

const renderToolbar = (Toolbar) => (
  <Toolbar>
    {(slots) => {
      const { ZoomOut, ZoomIn } = slots;
      return (
        <Box>
          <HStack spacing={2}>
            <IconButton />
            <ZoomIn>
              {(props) => <IconButton onClick={props.onClick} icon={<AiOutlineZoomIn size={"1.5em"} />} />}
            </ZoomIn>
            <ZoomOut>
              {(props) => (
                <IconButton
                  variant={"solid"}
                  colorScheme={"blackAlpha"}
                  onClick={props.onClick}
                  icon={<AiOutlineZoomOut size={"1.5em"} />}
                  aria-label={"button"}
                />
              )}
            </ZoomOut>
          </HStack>
        </Box>
      );
    }}
  </Toolbar>
);

export default function resume({ resumeData }) {
  return (
    <chakra.div bg={"#F0F0F0"} minHeight={"100vh"}>
      <Head>
        <title>Samyok Nepal</title>
        <meta
          name="description"
          content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's my resumé :)"
        />
        <meta property="og:url" content="https://samyok.us/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Samyok Nepal: My resumé" />
        <meta
          property="og:description"
          content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's my resumé :)"
        />
        <meta property="og:image" content="https://bcdn.samyok.us/api/ogimage?url=/resume&wait=1500" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="samyok.us" />
        <meta property="twitter:url" content="https://samyok.us/" />
        <meta name="twitter:title" content="Samyok Nepal's resumé" />
        <meta
          name="twitter:description"
          content="Hey! I'm Samyok Nepal, a coder in the midwest. Here's my resumé :)"
        />
        <meta name="twitter:image" content="https://bcdn.samyok.us/api/ogimage?url=/resume&wait=1500" />
      </Head>

      <main>
        <Navigation />
        <Box px={[2, 5, 10]} pb={20}>
          <ResumeTop />
          <ResumeHeading as={"h2"}>Education</ResumeHeading>
          {resumeData.education.map((item, index) => (
            <EducationItem item={item} key={"education-" + index} />
          ))}
          <ResumeHeading as={"h2"}>Experience</ResumeHeading>
          {resumeData.work.map((item, index) => (
            <ExperienceItem item={item} key={"work-" + index} />
          ))}
          <ResumeHeading as={"h2"}>Awards and Recognition</ResumeHeading>
          {resumeData.awards.map((item, index) => (
            <AwardItem item={item} key={"award-" + index} />
          ))}
          <ResumeHeading as={"h2"}>Skills and Interests</ResumeHeading>
          {JSON.stringify(resumeData.skills, null, 4)}
          {JSON.stringify(resumeData.interests, null, 4)}
        </Box>
      </main>
      <Footer />
    </chakra.div>
  );
}

export const getStaticProps = () => {
  const yaml = fs.readFileSync(join(process.cwd(), "./data/resume.yaml"), "utf8");
  const resumeData = load(yaml);
  return {
    props: { resumeData },
  };
};
