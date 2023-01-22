import styles from '@/src/styles/Home.module.css'
import { Stack, Button } from '@mui/material'
import { useRouter } from 'next/router'

const InitialButtons = () => {
  const router = useRouter()

  const handleStart = () => {
    router.push('/MainPage')
  }

  const handleSetting = () => {
    router.push('/SettingPage')
  }

  return (
    <Stack 
      spacing={2}
      direction="row"
    >
      <Button
        className={styles.initial_screen_button}
        variant="outlined"
        onClick={handleStart}
      >
        はじめる
      </Button>
      <Button
        className={styles.initial_screen_button}
        variant="outlined"
        onClick={handleSetting}
      >
        オプション
      </Button>
    </Stack>
  )
}

export default InitialButtons;