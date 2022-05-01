import Button from "./Button";
import Field from "./Field";
import ItemContact from "./ItemContact";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

export default function ContactSection() {
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();
  const serviceId = "service_bzjfcdu";
  const templateId = "template_0ovjb6o";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, "5prllr57T5XyrwehX").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <section className="container mx-auto px-10 2xl:px-0" id="contact">
        <div className="bg-primary-gray flex flex-wrap">
          <div className="md:w-6/12 w-full md:border-r border-primary-gray-200">
            <div className="lg:py-16 lg:px-20 md:p-14 p-5">
              <SectionTitle left>Contact</SectionTitle>
              <SectionParagraph left>If you have any question don't hesitate to ask me.</SectionParagraph>
              <ItemContact
                label={"Mail"}
                icon={"/mail_icon.svg"}
                value={"findsantodev@gmail.com"}
                className={"mt-10"}
              />
              <ItemContact
                label={"Phone/ WhatsApp"}
                icon={"/phone_icon.svg"}
                value={"+62-821-6749-2312"}
                className={"mt-6"}
              />
              <ItemContact label={"LinkedIn"} icon={"/linkedin_icon.svg"} value={"/in/santomalau"} className={"mt-6"} />
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <form onSubmit={sendEmail} ref={form} className="lg:py-16 lg:px-20 md:p-14 p-5">
              <div className="flex flex-wrap -mx-4">
                <div className="lg:w-6/12 w-full px-4">
                  <Field label={"Name"} name={"name"} />
                </div>
                <div className="lg:w-6/12 w-full px-4">
                  <Field label={"Email"} name={"email"} />
                </div>
              </div>
              <Field label={"Subject"} name={"subject"} />
              <Field label={"Message"} name={"message"} area={"big"} className={"h-40"} />
              <div className="text-right">
                <Button variant={"black"} type>
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
