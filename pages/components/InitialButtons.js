import { Stack, Button } from '@mui/material'

export const InitialButtons = () => {
  return (
    <Stack 
      spacing={2}
      direction="row"
    >
      <Button variant="outlined">はじめる</Button>
      <Button variant="outlined">オプション</Button>
    </Stack>
  )
}