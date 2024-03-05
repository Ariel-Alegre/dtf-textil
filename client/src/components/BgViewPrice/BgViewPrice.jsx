import styles from './BgViewPrice.module.css';
import Button from '@mui/material/Button';

export default function BgViewPrice() {
    return (
        <div className={styles.bg_view_price}>
            <div  className={styles.centered}>

            <div>
                <h1 className={styles.title}>PLANCHAMOS TU DTF</h1>
                <h1 className={styles.subTitle}>¿No tienes tiempo para planchar? ¡Te ayudamos!</h1>

                
            </div>
            <div>
                <Button variant="contained">VER PRECIOS</Button>
            </div>
            </div>
        </div>
    );
}
