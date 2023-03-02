import { ChevronLeft, ChevronRight } from "react-feather";
import gambar from "../assets/serasa.jpeg";
import gambar1 from "../assets/1.jpg";
import gambar2 from "../assets/2.jpg";
import CV from "../assets/CV_Celline Regia Yasshinta.pdf";
import { UilFileDownloadAlt } from "@iconscout/react-unicons";

export const Content = () => {
  return (
    <>
      <section id="abt" className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col max-w-screen-lg overflow-hidden border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <div className="overflow-hidden relative">
                <div className="flex"><img src={[gambar, gambar1, gambar2]} /></div>

                  <div className="absolute inset-0">
                    <button>
                      <ChevronLeft size={40} />
                    </button>
                    <button>
                      <ChevronRight size={40} />
                    </button>
                  </div>
                
              </div>

              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center lg:p-16 lg:pl-10 lg:w-1/2">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  a brief introduce
                </p>
              </div>
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                get to know me 🐱
              </h5>
              <p className="mb-5 text-gray-800">
                <span className="font-bold">Celline</span> was born at
                Banyuwangi, January 13th 2006. She is an ENTJ-A that use words
                and codes to convey her creativity. She reads, writes, and sing
                in her spare time. Let's connect!
              </p>
              <div className="flex items-center">
                <a
                  download=""
                  href={CV}
                  className="p-4 rounded-xl bg-yellow-1 flex"
                >
                  <UilFileDownloadAlt></UilFileDownloadAlt>Download CV
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
