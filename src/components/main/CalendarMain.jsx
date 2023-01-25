import { Stack, Paper } from "@mui/material"
import styles from "src/components/main/Calendar.module.css"

export const CalendarMain = () => {
  const dateArr = ["日", "月", "火", "水", "木", "金", "土"]

  return (
    <>
      <Stack
        className={styles.calendar_main}
        direction="row"
      >
        {dateArr.map((date) => {
          return(
            <Paper>
              {date}
            </Paper>
          )
        })}
      </Stack>
    </>
  )
}
