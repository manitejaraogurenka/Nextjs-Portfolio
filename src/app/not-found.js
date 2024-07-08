import Link from "next/link";

const NotFound = () => {
  return (
    <div className=" flex-col gap-6 text-3xl font-bold font-Orbitron text-white bg-black flex items-center justify-center w-screen h-screen">
      <span className=" text-[10rem] mb-10">404</span>
      <span>Page Not Found</span>
      <Link
        href={"/"}
        className=" bg-white text-black rounded-lg p-3 active:scale-95"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
