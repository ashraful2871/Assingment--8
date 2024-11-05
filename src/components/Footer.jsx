const Footer = () => {
  return (
    <footer className="ml-72  text-base-content p-12">
      <div className="mb-16 mr-60 text-center">
        <h1 className="text-3xl font-bold mb-3">Gadget Haven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="flex justify-evenly mr-44">
        <nav>
          <h6 className="footer-title">Services</h6>
          <div className="flex flex-col">
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <div className="flex flex-col">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
