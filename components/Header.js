import Link from 'next/link';
const Header = () => {
  return (
    <div className="Header bg-white  shadow">
      <div className="container mx-auto">
        <nav className="flex flex-wrap items-center justify-between p-4 ">
          <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <Link href="/">
            <a
              className="text-xl font-semibold font-heading"
              href="/"
              data-config-id="brand"
            >
              Next.js Demo
            </a>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
            <Link href="/">
              <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
                News
              </a>
            </Link>
            <Link href="/flash-news">
              <a className="inline-block py-4 px-8 mr-6 leading-none text-indigo-700 bg-white font-semibold rounded shadow">
                Flash News
              </a>
            </Link>  
            <Link href="/contact-us">
              <a className="inline-block py-4 px-8 mr-6 leading-none text-indigo-700 bg-white font-semibold rounded shadow">
                Contact Us
              </a>
            </Link>  
            <Link href="/about">
              <a className="inline-block py-4 px-8 mr-6 leading-none text-indigo-700 bg-white font-semibold rounded shadow">
                About
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
