import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout.js';
const About = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-blue-50">
          <h1 className="text-6xl font-bold">
            Contact us
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
         Contact us using the following email: udhayakumar0801@gmail.com
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
