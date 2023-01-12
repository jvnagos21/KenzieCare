import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { CardStyle, MainStyle } from "./style";
export function MainUser() {
  interface iOngs {
    userId: number;
    name: string;
    estado: string;
    areaAtuacao: string;
    imagem: string;
    id: number;
    descricao: string;
  }
  const [ongs, setOngs] = useState([]);
  useEffect(() => {
    axios
      .get("https://kenziecare-api.onrender.com/ONGs")
      .then((response) => {
        setOngs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <MainStyle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {ongs.map((ong: iOngs, key) => {
          return (
            <SwiperSlide>
              <CardStyle>
                <img src={ong.imagem} alt="imagem da ong" />
                <h1>{ong.name}</h1>
                <p>{ong.descricao}</p>
                <button>Doe agora</button>
              </CardStyle>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MainStyle>
  );
}
