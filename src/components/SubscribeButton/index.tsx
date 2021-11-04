import styles from "./style.module.scss"


interface SubscribeProps {
    priceId: string;
}
export function SubscribeButton({priceId}:SubscribeProps){
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe Now

        </button>
    )
}