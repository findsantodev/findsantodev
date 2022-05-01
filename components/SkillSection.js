import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ItemSkill from "./ItemSkill";
export default function SkillSection() {
  return (
    <>
      <section className="py-28 bg-primary-gray" id="skill">
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Skills</SectionTitle>
          <SectionParagraph>State management that i use for development.</SectionParagraph>
          <div className="flex flex-wrap w-9/12 items-center mx-auto mt-10">
            <ItemSkill icon={"/bloc.png"} title={"BLoC"} description={"Expert"} />
            <ItemSkill icon={"/cubit.png"} title={"Cubit"} description={"Expert"} />
            <ItemSkill icon={"/getx.png"} title={"GetX"} description={"Intermediate"} />
          </div>
        </div>
      </section>
    </>
  );
}
