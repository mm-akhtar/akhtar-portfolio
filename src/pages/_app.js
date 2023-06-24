import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router';

import '../styles/globals.css'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default function AkhtarApp({ Component, pageProps }) {
  const router = useRouter();
  return(
    
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
