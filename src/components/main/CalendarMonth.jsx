import styles from "src/components/main/Calendar.module.css";

export const CalendarMonth = () => {
  const weekNumArr = ["1", "2", "3", "4", "5", "6"]
  return (
    <Stack className={styles.calendar_month}>
      {weekNumArr.map((num) => {
        return (
          <Stack className={styles.calendar_week}>
            <CalendarWeek />
          </Stack>
        )
      })}
    </Stack>
  )
}
