export default function Field({ label, name, area, className }) {
  const addClassName = className ? `${className}` : "";
  const fieldClassName = `bg-transparent border border-primary-gray-300 py-3 px-4 w-full ${addClassName}`;
  return (
    <>
      <div className="mb-6">
        <label htmlFor={name} className="block mb-1 text-sm font-semibold">
          {label}
        </label>
        {area == "big" ? (
          <textarea type="text" name={name} id={name} className={fieldClassName} required />
        ) : (
          <input type="text" name={name} id={name} className={fieldClassName} required />
        )}
      </div>
    </>
  );
}
