import Link from 'next/link';
import { Image, Table } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div id="about-me" className="bg-light rounded-5 pb-5">
      <div className="text-center  container pt-4">
        <h1
          data-aos="zoom-in"
          className="p-4 rounded-pill bg-success text-white shadow d-inline-block "
        >
          About Me
        </h1>
        <div className="row g-5 justify-content-center ">
          <div data-aos="flip-up" className="col-lg-4 ">
            <Image
              src="images/me.png"
              alt=""
              className="rounded-5 backgg img-fluid mb-5"
            />
          </div>
          <div className="col-lg-8 rounded-5 p-5 bg-white shadow">
            <h3 data-aos="zoom-in" className="text-success head3">
              I am a Frontend Developer currently working at
              <Link href="https://www.scholapay.com/"> SCHOLAPAY</Link> with
              3years of coding experince. I started my tech career three years
              ago with basic HTML and CSS, but grew to Reactjs and from React to
              Nextjs which is now my favourite Framework
            </h3>
            <div className="pt-4 text-start">
              <Table responsive="sm" borderless hover>
                <tbody>
                  <tr data-aos="fade-left">
                    <td>Name:</td>
                    <td>Rapheal Adeyemi Odejinmi</td>
                  </tr>
                  <tr data-aos="fade-right">
                    <td>Email:</td>
                    <td>odejinmirapheal@gmail.com</td>
                  </tr>
                  <tr data-aos="fade-left">
                    <td>Phone:</td>
                    <td>08105958556</td>
                  </tr>
                  <tr data-aos="fade-right">
                    <td>Date of Birth:</td>
                    <td>13 Oct 1997</td>
                  </tr>
                  <tr data-aos="fade-left">
                    <td>Nationality:</td>
                    <td>Nigerian</td>
                  </tr>
                  <tr data-aos="fade-right">
                    <td>Address:</td>
                    <td>10 Alaro Sango, Ibadan, Oyo State, Nigeria</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-lg-8 p-4 green rounded-5">
            <h1 data-aos="flip-right" className="text-primary">
              Career Objective
            </h1>
            <p data-aos="zoom-in" className="text-success head3">
              To work with the existing staff and facilities, contributing the
              best of my ability and quota, so as to improve organizational
              objectives and achieve managerial goals and targets with the
              vision to impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
