import {FaGithub} from "react-icons/fa"
import{FiX} from "react-icons/fi"
import styles from "./style.module.scss"
import {signIn,signOut, useSession} from "next-auth/client"

export function SigninButton(){
    const[session]= useSession()

    
    console.log(session)

   return session?(
        <button type="button" className={styles.signinButton} onClick={()=>signOut()}>
            <FaGithub color ="#04d361"/>
            Juan Ormelli
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ):  
    (
        <button type="button" className={styles.signinButton} onClick={() => signIn('github')}>
            <FaGithub color ="#eba417"
            />

            Sign in with github
            
        </button>
    )
    
       

}