import {FaGithub} from "react-icons/fa"
import{FiX} from "react-icons/fi"
import styles from "./style.module.scss"

export function SigninButton(){
    const isLoggedIn = true

   return isLoggedIn?(
        <button className={styles.signinButton}>
            <FaGithub color ="#04d361"/>
            Juan Ormelli
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ):  
    (
        <button className={styles.signinButton}>
            <FaGithub color ="#eba417"/>
            Sign in with github
            
        </button>
    )
    
       

}