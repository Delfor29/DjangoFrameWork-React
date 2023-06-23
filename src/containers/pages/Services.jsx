import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Services = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Services page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Services;