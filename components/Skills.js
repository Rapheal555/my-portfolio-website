import { Image } from 'react-bootstrap';

const Skills = () => {
  return (
    <div id="skills" data-aos="zoom-in" className="bg-light rounded-5 mt-4">
      <div className="container">
        <h1
          data-aos="zoom-in"
          className="p-3 rounded-5 text-center bg-info text-white shadow "
        >
          Skills
        </h1>
        <div className="row py-5">
          <div className="col-md-6 ps-md-5">
            <ul className=" h3">
              <li>Nextjs</li>
              <li>Reactjs</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>Ant Design</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Axios</li>
              <li>React Redux</li>
              {/* <li></li>
        <li></li>
        <li></li> */}
            </ul>
          </div>
          <div className="col-md-6">
            <Image
              className="rounded-5 img-fluid"
              src="https://th.bing.com/th/id/OIP.qsAYFzI7t5ryIcFMbOjeyQHaD_?pid=ImgDet&w=816&h=440&rs=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
