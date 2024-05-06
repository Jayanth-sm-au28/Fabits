import Image from "next/image";
import Animation from "../../public/Animation.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mt-10 p-10">
      <>
        <div className="max-w-sm bg-white border border-gray-200  rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="w-full"
              src={Animation}
              alt="Animation"
              height={100}
              width={100}
            />
          </a>
          <div className="p-5">
            
            <Link
              href="/project1"
              className="inline-flex items-center px-3 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none w-full h-9"
            >
              Project 1{" "}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
      <>
        <div className="max-w-sm mt-4 lg:mt-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="w-full"
              src={Animation}
              alt="Animation"
              height={100}
              width={100}
            />
          </a>
          <div className="p-5">
            
            <Link
              href="/project2"
              className="inline-flex items-center px-3 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none w-full h-9  "
            >
              Project 2
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}

   