import { Typography, Stack } from "@mui/material"
import { motion } from "framer-motion"

const InitialScreenMain = () => {
  return (
    <Stack spacing={8}>
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.8, 0.2, 1]
        }}
      >
        <Typography variant="h1">
          家
        </Typography>
      </motion.div>
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.8,
          delay: 1.0,
          ease: [0, 0.8, 0.2, 1]
        }}
      >
        <Typography variant="h1">
          計
        </Typography>
      </motion.div>
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: [0, 0.8, 0.2, 1]
        }}
      >
        <Typography variant="h1">
          簿 
        </Typography>
      </motion.div>
    </Stack>
  )
}

export default InitialScreenMain;