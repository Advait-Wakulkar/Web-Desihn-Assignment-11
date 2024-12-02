
const Footer = () => {
  return (
    <footer className="text-white mp-20">

      <div className="bg-[#1d4ed8] ">

        <div className="bg-[#001a36]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              &copy; 2023 Job Portal —
              <a
                href="https://youtube.com/@CodeWaveWithAsante"
                className="text-[#1199e7] ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Advait
              </a>
            </p>

            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
              Designed by Advait
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
