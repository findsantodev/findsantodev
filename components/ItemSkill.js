import Image from "next/image";
export default function ItemSkill({ icon, title, description }) {
  return (
    <>
      <div className="w-40 h-40 bg-white shadow-item p-8 text-center rounded-full justify-center items-center mx-auto my-2">
        <Image src={`${icon}`} className="h-10 mx-auto" alt="" width={90} height={50} />
        <div>
          <h4 className="text-lg font-semibold">{`${title}`}</h4>
          <p className="text-sm text-gray-500 font-semibold mt-1">{`${description}`}</p>
        </div>
      </div>
    </>
  );
}
