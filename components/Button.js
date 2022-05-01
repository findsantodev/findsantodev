export default function Button({ href, className, variant, children, pill, type }) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:bg-yellow-200 hover:text-black`,
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    black: "bg-black hover:bg-yellow-500 text-white hover:text-black",
  };

  const pickedVariant = variants[variant];

  return (
    <>
      {type ? (
        <input
          type={"submit"}
          className={`transtion px-10 font-semibold text-lg ${
            pill ? "rounded-full py-3" : "py-2"
          } inline-block ${pickedVariant} ${addClassName}`}
        />
      ) : (
        <a
          type={`${type ? "submit" : ""}`}
          href={href}
          className={`transtion px-10 font-semibold text-lg ${
            pill ? "rounded-full py-3" : "py-2"
          } inline-block ${pickedVariant} ${addClassName}`}
        >
          {children}
        </a>
      )}
    </>
  );
}
