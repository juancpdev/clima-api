import React from "react";
import styles from './Alert.module.css'

export default function Alert({children} : {children : React.ReactNode}) {
  return (
    <div className={styles.alerta}>{children}</div>
  )
}
