import gambar from "../assets/serasa.jpeg";
import SMP from "../assets/smp.png";
import SMK from "../assets/SMK.svg";
import CV from "../assets/CV_Celline Regia Yasshinta.pdf";
import { UilFileDownloadAlt } from "@iconscout/react-unicons";

export const Content = () => {
  return (
    <>
      <section id="abt" >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col max-w-screen-lg overflow-hidden border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <div className="overflow-hidden relative">
                <div className="flex">
                  <img src={gambar} alt="serasa" />
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
              <h5 className="px-4 mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                get to know me 🐱
              </h5>
              <p className="px-4 mb-5 text-gray-800">
                <span className="font-bold">Celline</span> was born at
                Banyuwangi, January 13th 2006. She is an ENTJ-A that use words
                and codes to convey her creativity. She reads, writes, and sing
                in her spare time. Let's connect!
              </p>
              <div className="flex items-center">
                <a
                  download=""
                  href={CV}
                  className="m-4 mt-0 p-4 rounded-xl bg-yellow-1 flex"
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
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education History Section */}
      <section id="school">
        <div className="px-8 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl text-black uppercase font-bold mb-4 text-center hover:underline underline-offset-4">
            Education History
          </h1>
          <div className="grid max-w-2xl mx-auto">

                {/* Elementary Bullet List */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 opacity-0 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs bg-violet-3 font-medium border rounded-full">
                    1
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>

              {/* Elementary Name and Description*/}
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-white sm:w-24 sm:h-24">
                    <img src=" https://siap-sekolah.s3.amazonaws.com/files/2013/03/Copy-of-Copy-of-log-4-finish.jpg.jpg"
                    className="p-4"/>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    SDN 4 Penganjuran 
                  </p>
                  <p className="text-sm text-gray-700">
                  Achieved Top 3 of Ujian Nasional (UN) 2018 and 1st place Lomba Cerdas Cermat. Participated in MIPA and English olympiads.
                  </p>
                </div>
              </div>
            </div>

            {/* Junior High Bullet List */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs bg-violet-3 font-medium border rounded-full">
                    2
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>

              {/* Junior High Name and Description*/}
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-white sm:w-24 sm:h-24">
                    <img src={SMP}
                    className="p-3"/>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                  SMPN 1 Banyuwangi 
                  </p>
                  <p className="text-sm text-gray-700">
                    Participated in OSIS (Student Council) as Secretary, Rohis (Islamic Student Community), and School Teater. 
                  </p>
                </div>
              </div>
            </div>

              {/* Senior High Bullet List */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-xs bg-violet-3 font-medium border rounded-full">
                    3
                  </div>
                </div>
                <div className="w-px h-full opacity-0" />
              </div>

              {/* Senior High Name and Description*/}
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-white sm:w-24 sm:h-24">
                    <img src={SMK}
                    className="p-3"/>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    SMK Telkom Malang
                  </p>
                  <p className="text-sm text-gray-700">
                    Enrolled in Node React JS expertise. Served as Public Relation in Perpustakaan Telkom (Pustel). 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
