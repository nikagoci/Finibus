import React from "react";
import StarterPage from "../../components/NavPageDef/StarterPage";
import ServiceCard from "../../components/Services/ServiceCard";
import Services from "../Services";

const items = {
  first: {
    text: 'interger purus adio, placerat ni in, ullamcorper nec dolor.',
    header: 'Video Animation',
    img: 'https://finibus-react.b-cdn.net/images/icons/service-icon-5.png'
  },
  second: {
    text: 'interger purus adio, placerat ni in, ullamcorper nec dolor.',
    header: '3D Design',
    img: 'https://finibus-react.b-cdn.net/images/icons/service-icon-6.png'
  },
  third: {
    text: 'interger purus adio, placerat ni in, ullamcorper nec dolor.',
    header: 'UI/UX Design',
    img: 'https://finibus-react.b-cdn.net/images/icons/service-icon-7.png'
  }
}

const NavService = () => {
  return (
    <section className="nav-service">
      <StarterPage title="service" />
      <Services>
        <ServiceCard img={items.first.img} text={items.first.text} header={items.first.header} />
        <ServiceCard img={items.second.img} text={items.second.text} header={items.second.header} />
        <ServiceCard img={items.third.img} text={items.third.text} header={items.third.header} />
      </Services>
    </section>
  );
};

export default NavService;
