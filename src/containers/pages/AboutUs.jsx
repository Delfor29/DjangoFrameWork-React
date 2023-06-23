import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const About = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        About page
      </div>
      <Footer/>
    </Layout>
  )
}

export default About;