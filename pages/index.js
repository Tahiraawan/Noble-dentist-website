import About from '../src/components/About';
import HeroSection from '../src/components/HeroSection';
import Services from '../src/components/Services';
import Layout from '../src/components/Layout';
import Contacts from '../src/components/Contacts';
import Appointment from '../src/components/Appointment';
import MeetDoctor from '../src/components/MeetDoctor';


export default function Home() {
  return (
    <>
    <Layout>
      <HeroSection/>
      <About/>
      <Services/>
      <Appointment/>
      <MeetDoctor/>
      <Contacts/>
    </Layout>
    
    </>
  )
}
