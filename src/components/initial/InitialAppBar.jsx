import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import styles from '@/src/styles/Home.module.css'
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';


const InitialAppBar = () => {
  const router = useRouter()
  const handleLogIn = () => {
    router.push('/LoginPage')
  }
  
  return (
    <>
      <AppBar>
        <Toolbar className={styles.initial_appbar}>
          <Button
            className={styles.initial_home_button}
          >
            <AiOutlineHome size={24} />
          </Button>
          <Button
            className={styles.initial_login_button}
            variant='contained'
            onClick={handleLogIn}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default InitialAppBar;