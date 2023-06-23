import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

const Blog = () => {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-28">
        Blog page
      </div>
      <Footer/>
    </Layout>
  )
}

export default Blog;