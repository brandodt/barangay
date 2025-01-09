import 'bulma/css/bulma.min.css'
import NavigationBar from "../components/NavigationBar"
import WelcomePageOne from '../components/WelcomePageOne'
import WelcomPageTwo from '../components/WelcomPageTwo'
import WelcomePageThree from '../components/WelcomePageThree'
import MissionVision from '../components/MissionVision'
import HeroFooter from '../components/HeroFooter'

const Index = () => {
  return (
    <>
      <NavigationBar />
      <WelcomePageOne />
      <WelcomPageTwo />
      <WelcomePageThree />
      <MissionVision />
      <HeroFooter />
    </>
  );
}

export default Index
