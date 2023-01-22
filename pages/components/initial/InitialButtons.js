import styles from '@/styles/Home.module.css'
import { Stack, Button } from '@mui/material'

export const InitialButtons = () => {
  return (
    <Stack 
      spacing={2}
      direction="row"
    >
      <Button
        className={styles.initial_screen_button}
        variant="outlined"
      >
        はじめる
      </Button>
      <Button
        className={styles.initial_screen_button}
        variant="outlined"
      >
        オプション
      </Button>
    </Stack>
  )
}