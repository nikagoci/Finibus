import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ClientReview from "./ClientReview";
import "swiper/css/navigation";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const info = {
  first: {
    name: "Savannah Nguyen",
    job: "Executive CEO",
    text: " Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on",
    img: "https://finibus-react.b-cdn.net/images/client.jpg",
  },
  second: {
    name: "Nailong Jeso",
    job: "CTO Founder",
    text: " Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on",
    img: "https://finibus-react.b-cdn.net/images/client-2.jpg",
  },
  third: {
    name: "Gautam Yamni",
    job: "Designer Head",
    text: " Curabitur magna nisi, egestas quis est in, finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis, ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor odio, aliquam vitae noday backowner condimentum this fire ongon then only on",
    img: "https://finibus-react.b-cdn.net/images/client-3.jpg",
  },
};

const ClientSide = () => {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        onSlideChange={(e) => setCurrent(e.realIndex + 1)}
      >
        <SwiperSlide>
          <ClientReview name={info.first.name} job={info.first.job} text={info.first.text} img={info.first.img}  />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReview name={info.second.name} job={info.second.job} text={info.second.text} img={info.second.img} />
        </SwiperSlide>
        <SwiperSlide>
          <ClientReview name={info.third.name} job={info.third.job} text={info.third.text} img={info.third.img} />
        </SwiperSlide>
      </Swiper>
      <Box>
        <Typography variant="h4" component="h3">
          {current}
          <span style={{ color: "#d90a2c", fontSize: "24px" }}>/3</span>
        </Typography>
      </Box>
    </>
  );
};

export default ClientSide;
