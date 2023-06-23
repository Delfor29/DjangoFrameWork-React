import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Cases = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Cases page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cases;