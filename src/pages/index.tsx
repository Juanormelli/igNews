
import Head from "next/head"
import React from "react"
import { SubscribeButton } from "../components/SubscribeButton"
import styles from "./home.module.scss"
import {GetServerSideProps} from"next"
import {stripe} from "../services/stripe"


interface HomeProps {
  product: {
    id: string;
    amount: number;
  }
 
}

export default function Home({product}:HomeProps) {

 



  return (
    <>
      <Head>
        <title>Home | IgNews</title>
      </Head>


      <main className={styles.contentContainer}> 
        <section className={styles.hero}>
          <span>🖐 Hey Welcome!</span>
          <h1>News about<br/> the <span>React</span> World.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount}/month</span>
          </p>
          <SubscribeButton priceId={product.id}/>
        </section>

        <img src="/images/avatar.svg" alt="girlCoding" />
        
      </main>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async()=>{
  const price = await stripe.prices.retrieve('price_1Jrpe8BRRRqz0R9hrb0cnxZj')

  const product = {
    priceId : price.id,
    amount: new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD"
    }).format(price.unit_amount/100) // é sempre salvo em centavos

  } 

  return{
    props:{
      product
    }
  }

}
