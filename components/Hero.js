import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <>
      <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
        <div className="container mx-auto px-10 2xl:px-0">
          <NavBar />
          <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
            <div className="text-white text-3xl font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12  mx-auto leading-relaxed">
              <h1 className="">
                Hello, I&apos;m
                <span className="text-yellow-500 hidden md:inline"> Santo Malau.</span>
              </h1>
              <h1 className="text-yellow-500 block md:hidden">Santo Malau.</h1>
              <h1 className="">I&apos;m a Flutter Developer</h1>
            </div>

            <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
              a little <span className="text-yellow-500">different is better</span> than a little better
            </p>
            <Button href={"#project"} className="mt-14" variant="yellow" pill>
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
