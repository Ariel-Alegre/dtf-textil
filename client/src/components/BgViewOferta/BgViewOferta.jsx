import styles from './BgViewOferta.module.css';
import Button from '@mui/material/Button';

export default function BgViewOferta() {
    return (
        <div className={styles.bg_view_price}>
            <div  className={styles.centered}>

            <div>
                <h1 className={styles.title}>¡PROMOCIÓN ESPECIAL!</h1>
                <h1 className={styles.subTitle}>POR CADA 5 METROS de DTF-1 MÁS DE REGALO</h1>

                <h1 className={styles.example}>POR EJEMPLO:</h1>
                <h1 style={{fontWeight: 600}} className={styles.example}>Si necesita 12 metros añade al carrito 10 metros</h1>
                <h1 style={{marginBottom: '2em'}}className={styles.example}>(Porque en 12 metros te corresponden <span style={{fontWeight: 600, color: "orange"}}>2 metros GRATIS</span> que se sumarán automaticamente a tu carrito)</h1>
                <h1 style={{ marginBottom: '1em'}} className={styles.example}>* Metros NO acumulables en distintos pedidos</h1>
                
                
            </div>
            <div>
                <Button variant="contained">QUIERO LA OFERTA</Button>
            </div>
            </div>
        </div>
    );
}
