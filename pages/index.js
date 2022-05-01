import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
