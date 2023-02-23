import { Box } from '@mui/material';
import Sidebar from './global/Sidebar/Sidebar'
import Topbar from './global/Topbar/Topbar';
import LandingPage from './pages/LandingPage/Landingpage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Box sx={{display: 'flex', flex: '1', flexDirection: 'column', width: 'calc(100% - 270px)'}}>
        <Topbar />
        <LandingPage />
      </Box>
    </div>
  );
}

export default App;
