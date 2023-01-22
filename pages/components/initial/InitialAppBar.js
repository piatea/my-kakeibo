import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import styles from '@/styles/Home.module.css'
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';


const InitialAppBar = () => {
  return (
    <>
      <AppBar>
        <Toolbar className={styles.initial_appbar}>
          <Button
            className={styles.initial_home_button}
          >
            <AiOutlineHome size={24} />
          </Button>
          <Link href="/components/login/loginScreen">
            <Button
              className={styles.initial_login_button}
              variant='contained'
            >
              Log in
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default InitialAppBar;