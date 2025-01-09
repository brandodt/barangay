import 'bulma/css/bulma.min.css'
import NavigationBar from "../components/NavigationBar"
import WelcomePageOne from '../components/WelcomePageOne'
import WelcomPageTwo from '../components/WelcomPageTwo'
import WelcomePageThree from '../components/WelcomePageThree'
import HeroFooter from '../components/HeroFooter'

const Index = () => {
  return (
    <>
      <NavigationBar />
      <WelcomePageOne />
      <WelcomPageTwo />
      <WelcomePageThree />
      <HeroFooter />
    </>
  );
}

export default Index
