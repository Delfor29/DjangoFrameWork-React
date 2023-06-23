import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Contact = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Contact
       page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Contact;