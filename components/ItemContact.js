import Image from "next/image";
export default function ItemContact({ icon, label, value, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <>
      <div className={`flex items-start ${addClassName}`}>
        <Image src={icon} className="w-10" alt="" width={28} height={28} />
        <div className="ml-4">
          <div className="text-sm font-semibold mb-2">{label}</div>
          <div className="text-lg font-semibold">{value}</div>
        </div>
      </div>
    </>
  );
}
