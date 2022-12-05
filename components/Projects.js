import Link from 'next/link';
import { Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <div className="container mt-5">
      <h1
        data-aos="zoom-in"
        className="p-4 rounded-pill bg-info text-white shadow d-inline-block "
      >
        Projects
      </h1>
      <div className="row g-5 justify-content-center">
        {project.map((t) => {
          return (
            <div data-aos="zoom-in" key={t.id} className="col-md-6 ">
              <div className="bg-white rounded-5 p-4">
                <h1
                  data-aos="flip-right"
                  className="p-4 text-center blue rounded-pill"
                >
                  {t.title}
                </h1>

                <Image
                  data-aos="flip-up"
                  className="img-fluid rounded-5"
                  src={t.image}
                  alt=""
                />
                <p
                  data-aos="zoom-in"
                  className="bg-light rounded-5 p-4 mt-4 text-primary p1"
                >
                  {t.description}
                  <Link href={t.link}>Check it out</Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export const project = [
  {
    title: 'Scholapay',
    description:
      'Using Next.js. I was able to successfully work on the project with my fellow developers. Working on Scholapay is one those things that keeps me going on this journey of technology.',
    image: '/images/scholapay.png',
    tags: ['Next', 'React', 'Javascrpt', 'JSX', 'CSS', 'HTML'],
    link: 'https://www.scholapay.com/',
    id: 0,
  },
  {
    title: 'My Portfolio',
    link: '',
    description:
      'I built this Portfolio with React and Nextjs. It is amazing to finaly have my CV as a website, it is a great accomplishment for me as a developer .',
    image: '/images/portfolio.png',
    tags: ['Nextjs', 'React-Bootstrap', 'CSS'],
    id: 1,
  },
  {
    title: 'Bank Contract',
    link: '',
    description:
      'Using React, Node.js and Solidity. I created a bank app that accepts deposits, and also allows Withdrawals.',
    image: '/images/web3.png',
    tags: ['Solidity', 'React', 'Node'],
    id: 2,
  },
];
