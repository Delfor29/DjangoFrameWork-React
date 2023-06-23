import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Careers = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Careers
       page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Careers;