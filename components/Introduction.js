import { Image } from 'react-bootstrap';

const Introduction = () => {
  return (
    <div className="box ">
      <div className=" container">
        <div className="row g-5 ">
          <div data-aos="fade-right" className="col-md-7 pt-5">
            {/* Introduction */}
            <h5 className=" head1">
              Hello, and Welcome To My Personal Portfolio
            </h5>
            <h5 className=" head3">
              My name is Rapheal Odejinmi, I am a Frontend Engineer with 4years
              experince. I started my tech career four years ago with basic HTML
              and CSS, but grew to Reactjs and from React to Nextjs which is now
              my favourite Framework
            </h5>
          </div>
          <div data-aos="fade-left" className=" col-md-5 ">
            <div className="intro-img text-end rounded-5">
              <Image
                src="images/me.png"
                alt=""
                className="rounded-5 backgg img-fluid mb-5"
              />
              {/* <Image
                src="https://img.freepik.com/premium-photo/study-group-african-people_23-2149156412.jpg?w=740"
                alt=""
                className="rounded-5 img-fluid d-none d-sm-block intro-img2"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
