import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Home = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Home page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home;