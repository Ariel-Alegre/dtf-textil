import * as React from 'react';
import styles from "./Impression.module.css";
import { TfiGallery } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCurrencyEuro } from "react-icons/hi";
import { TbExclamationCircle } from "react-icons/tb";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

export default function Impression() {

  const theme = useTheme();
  return (
    <>
    <div className={styles.impression_container}>
      <div className={styles.box_datas}>
        <div className={styles.price_m2}>
          <span className={styles.stat_title}>Total imágenes</span>
          <div className={styles.container_gallery}>
            <strong>0</strong>
            <div>
              <TfiGallery className={styles.icons} />
            </div>
          </div>
        </div>

        <div className={styles.price_m2}>
          <span className={styles.stat_title}>Total elementos</span>
          <div className={styles.container_gallery}>
            <div>
              <strong>0</strong>
            </div>
            <div>
              <RxDashboard className={styles.icons} />
            </div>
          </div>
        </div>

        <div className={styles.price_m2}>
          <span className={styles.stat_title}>Precio / m</span>
          <div className={styles.container_gallery}>
            <div>
              <strong>13.95€</strong>
            </div>
            <div>
              <HiOutlineCurrencyEuro className={styles.icons} />
            </div>
          </div>
          <span className={styles.inpuesto}>(+21% IVA)</span>
        </div>

        <div className={styles.price_m2}>
          <span className={styles.stat_title}>Metros totales</span>
          <div className={styles.container_gallery}>
            <div>
              <strong>0</strong>
            </div>
            <div>
              <TbExclamationCircle className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.png_container}>

      <div className={styles.upload}>
     
      <Card sx={{ display: 'flex', marginTop: '2em' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Arrastras tus imagenes
          </Typography>
      
        </CardContent>
    
      </Box>
  
    </Card>
      </div>
        <div className={styles.png_info}>
      </div>

      </div>
    </div>
    </>

  );
}
