import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import styles from '@/src/components/main/Calendar.module.css'
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';


export const CalendarHeader = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/LoginPage')
  }

  const handleHome = () => {
    router.push('/')
  }
  
  return (
    <>
      <AppBar>
        <Toolbar className={styles.calendar_appbar}>
          <Button
            className={styles.calendar_home_button}
            variant='contained'
            onClick={handleHome}
            endIcon={<AiOutlineHome />}
          >
            Home
          </Button>
          <Button
            className={styles.calendar_login_button}
            variant='contained'
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}