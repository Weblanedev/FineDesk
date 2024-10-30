import ResponsiveImage from "components/shared/ResponsiveImage";

function About() {
  return (
    <aside className="row">
      <div className="col-xxl-6 order-xxl-2 pb-3 mb-4 pb-xxl-0 mb-xxl-0">
        <ResponsiveImage
          image={{
            mobile: "/assets/shared/mobile/image-best-gear.jpg",
            tablet: "/assets/shared/tablet/image-best-gear.jpg",
            desktop: "/assets/shared/desktop/image-best-gear.jpg",
          }}
          imgClassName="best-gear-image rounded w-100"
          alt="Man wearing headphones"
        />
      </div>
      <div className="col-xxl-6 align-items-center d-flex">
        <div className="text-center text-xxl-start">
          <h3 className="fw-bold mb-4 pb-2 d-md-none">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h3>
          <h1 className="fw-bold px-4 px-md-5 mb-4 d-none d-md-block ps-xl-0 pe-xl-6 me-xxl-5">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="text-black-50 mx-md-5 ms-xl-0 me-xl-6 pe-xl-5 mb-0">
          At Fine Desk, we believe that great sound should be an everyday luxury. 
          Since our start, we{"'"}ve been committed to creating headphones, speakers, 
          and earphones that blend exceptional sound quality with sleek, modern design. 
          Every Fine Desk product is crafted with care, designed for durability, and 
          optimized for a seamless listening experience, no matter where you are.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default About;
