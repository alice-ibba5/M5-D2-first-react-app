const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="text-white">{`Copyright © EpiBooks ${year}`}</footer>;
  };
  
  export default Footer;