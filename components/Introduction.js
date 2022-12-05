import { Image } from 'react-bootstrap';

const Introduction = () => {
  return (
    <div className="box">
      <div className=" container">
        <div className="row g-5 ">
          <div data-aos="fade-right" className="col-md-7 pt-5">
            {/* Introduction */}
            <h5 className=" head1 text-white">
              Hello, I&apos;m
              <span className="text-warning"> Rapheal Odejinmi</span>, welcome
              to my Portfolio
            </h5>
          </div>
          <div data-aos="fade-left" className=" col-md-5 ">
            <div className="intro-img text-end rounded-5">
              <Image
                src="images/me.png"
                alt=""
                className="rounded-5 back img-fluid mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
