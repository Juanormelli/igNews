import Head from "next/head"
import styles from "./styles.module.scss"
export default function Posts(){

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a >
                        <time>15/06/2000</time>
                        <strong>Teste</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero nisi. Pellentesque pharetra placerat massa at aliquam. Curabitur non pharetra nisi. Etiam massa lectus, auctor sed vestibulum efficitur, convallis pretium felis. Ut sed augue eget ex euismod laoreet quis a magna. Nullam et ornare mi. Vestibulum at porttitor tellus. Nam consequat, enim id pretium vestibulum, risus enim tincidunt massa, sit amet hendrerit lacus sapien vel magna.</p>
                    </a>
                    <a >
                        <time>15/06/2000</time>
                        <strong>Teste</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero nisi. Pellentesque pharetra placerat massa at aliquam. Curabitur non pharetra nisi. Etiam massa lectus, auctor sed vestibulum efficitur, convallis pretium felis. Ut sed augue eget ex euismod laoreet quis a magna. Nullam et ornare mi. Vestibulum at porttitor tellus. Nam consequat, enim id pretium vestibulum, risus enim tincidunt massa, sit amet hendrerit lacus sapien vel magna.</p>
                    </a>
                    <a >
                        <time>15/06/2000</time>
                        <strong>Teste</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero nisi. Pellentesque pharetra placerat massa at aliquam. Curabitur non pharetra nisi. Etiam massa lectus, auctor sed vestibulum efficitur, convallis pretium felis. Ut sed augue eget ex euismod laoreet quis a magna. Nullam et ornare mi. Vestibulum at porttitor tellus. Nam consequat, enim id pretium vestibulum, risus enim tincidunt massa, sit amet hendrerit lacus sapien vel magna.</p>
                    </a>
                    <a >
                        <time>15/06/2000</time>
                        <strong>Teste</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero nisi. Pellentesque pharetra placerat massa at aliquam. Curabitur non pharetra nisi. Etiam massa lectus, auctor sed vestibulum efficitur, convallis pretium felis. Ut sed augue eget ex euismod laoreet quis a magna. Nullam et ornare mi. Vestibulum at porttitor tellus. Nam consequat, enim id pretium vestibulum, risus enim tincidunt massa, sit amet hendrerit lacus sapien vel magna.</p>
                    </a>
                    <a >
                        <time>15/06/2000</time>
                        <strong>Teste</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero nisi. Pellentesque pharetra placerat massa at aliquam. Curabitur non pharetra nisi. Etiam massa lectus, auctor sed vestibulum efficitur, convallis pretium felis. Ut sed augue eget ex euismod laoreet quis a magna. Nullam et ornare mi. Vestibulum at porttitor tellus. Nam consequat, enim id pretium vestibulum, risus enim tincidunt massa, sit amet hendrerit lacus sapien vel magna.</p>
                    </a>
                </div>
            </main>

        </>

    )



}