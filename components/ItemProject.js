export default function ItemProject({ title, description, image }) {
  return (
    <>
      <div className="lg:w-6/12 w-full px-4 pb-10">
        <article className="flex text-center bg-slate-100 rounded-xl">
          <img src={`${image}`} className="w-6/12 rounded-lg" alt="" />
          <div className="w-6/12">
            <h3 className="text-xl font-semibold mt-4 mb-2">{`${title}`}</h3>
            <p className="text-lg text-gray-400 text-left px-4">{`${description}`}</p>
          </div>
        </article>
      </div>
    </>
  );
}
