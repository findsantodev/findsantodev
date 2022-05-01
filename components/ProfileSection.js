import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import Image from "next/image";
export default function ProfileSection() {
  return (
    <>
      <section className="py-28" id="profile">
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Profile</SectionTitle>
          <SectionParagraph>Who&apos;s this guy?</SectionParagraph>
          <div className="flex flex-wrap xl:w-9/12 mx-auto mt-10 lg:items-center md:items-start">
            <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
              <Image src="/profile.png" className="w-full" alt="" width={289} height={417} />
            </div>
            <div className="md:w-7/12 w-full px-10">
              <p className="text-lg leading-relaxed">
                I&apos;m a Flutter Developer from Indonesia. Application development with Flutter is different from
                other frameworks because the first time I felt something was different with this framework. Now if
                people ask me what my hobby is, I will answer developing applications with Flutter.
              </p>
              <p className="text-lg mt-6 leading-relaxed">
                I&apos;m passionate about building excellent software that improves the lives of those around me. I
                specialize in creating software for clients ranging from individuals and small-businesses all the way to
                large enterprise corporations. What would you do if you had a software expert available at your
                fingertips?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
