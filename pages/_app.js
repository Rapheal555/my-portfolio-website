import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
// import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
