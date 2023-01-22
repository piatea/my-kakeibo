import styles from 'src/styles/Home.module.css';
import InitialHeader from "@/src/components/initial/InitialHeader";
import InitialMain from "@/src/components/initial/InitialMain";

const InitialPage = () => {
  return (
    <>
      <InitialHeader className={styles.initial_header}/>
      <InitialMain />
    </>
  )
}

export default InitialPage;