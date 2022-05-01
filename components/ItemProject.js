import Image from "next/image";
export default function ItemProject({ title, description, image }) {
  return (
    <>
      <div className="lg:w-6/12 w-full px-4 pb-10">
        <article className="md:flex text-center bg-slate-100 rounded-xl py-10">
          <div className="md:w-6/12 w-full">
            <Image src={`${image}`} className="rounded-lg" alt="" width={250} height={505} />
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="text-xl font-semibold mt-4 mb-2">{`${title}`}</h3>
            <p className="text-lg text-gray-400 text-left px-4">{`${description}`}</p>
          </div>
        </article>
      </div>
    </>
  );
}
