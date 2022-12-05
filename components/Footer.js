import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-dark p-5 mt-5">
      <Link href="https://www.linkedin.com/in/rapheal-odejinmi-9baa801a3/">
        <i class="bi bi-linkedin head2 text-white"></i>
      </Link>
      <Link href="https://twitter.com/ROdejinmi">
        <i class="bi mx-sm-5 mx-4 bi-twitter head2 text-white"></i>
      </Link>
      <Link href="https://github.com/Rapheal555">
        <i class="bi bi-github head2 text-white"></i>
      </Link>
    </div>
  );
};

export default Footer;
