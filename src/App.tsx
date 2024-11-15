
import './App.css'
import BannerContainer from './containers/BannerContainer'
import MainContainer from './containers/MainContainer'


function App() {

  return (
		<div className='flex h-[665px] w-[1232px] rounded-3xl'>
			<MainContainer/>
			<BannerContainer/>
		</div>
	)
}

export default App
