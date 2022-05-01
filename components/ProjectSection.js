import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ItemProject from "./ItemProject";

export default function ProjectSection() {
  return (
    <>
      <section className="py-28" id="project">
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Projects</SectionTitle>
          <SectionParagraph>Some of the applications I've ever made.</SectionParagraph>
          <div className="flex -mx-4 mt-20 flex-wrap">
            <ItemProject
              image={"/project_imeet.png"}
              title={"iMeet"}
              description={
                "When guests who come to a building are not properly recorded so that the building does not have data when they need it. iMeet is needed so that guest data can be recorded properly."
              }
            />
            <ItemProject
              image={"/project_himount.png"}
              title={"HiMount"}
              description={
                "Mountaineering is one of the most dangerous natural activities, therefore HiMount is here to provide the necessary information such as mountain data, mountaineering tips and others. You can also communicate with friends so that you can schedule a hike together."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
