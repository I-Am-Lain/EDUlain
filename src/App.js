import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Problem from './components/home_components/Problem'
import Solution from './components/home_components/Solution'
import Advisors from './components/home_components/Advisors'
import Offers from './components/home_components/Offers'
import Team from './components/home_components/Team'

function App() {

  return (
      <div className='home-container'>
          <Problem />
          <Solution />
          <Offers />
          <Team />
          <Advisors />
      </div>

  );
}

export default App;
