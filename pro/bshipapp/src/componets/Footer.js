import React from 'react'
import styled from 'styled-components';
 function Footer() {
    return (
      <FooterContainer className="main-footer m-auto" >
      <div className="fables-testimonial fables-after-overlay bg-rules py-4 py-lg-5" style={{  
   backgroundImage:
    //  linear-gradinent(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),
  "url(" + "https://images.pexels.com/photos/2162442/pexels-photo-2162442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 " + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
    <div className="container ml-2" style={{}}>
        <div className="row">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
               
               </div>
   
               <div className="col-12 col-sm-6 col-lg-4 ">
                   <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 text-white ">Contact us</h2>
                   <div className="my-3">
                       <h4 className="font-16 semi-font text-light"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block "></span> Address Information</h4>
                       <p className="font-14 fables-fifth-text-color mt-2 ml-4 text-light">
                           BSHIP
                           No.67, 1st Floor,
                           S.B Road, V.V Puram,
                           Bangalore – 560004
                       </p>
                       </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font text-light"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block text-light"></span> Call Now </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4 text-light">+919865835863</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font text-light"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block text-light"></span> Mail </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4 text-light">info@bship.com</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3 text-white">EXPLORE OUR SITE</h2>
                <a href="#" className="btn btn-danger">
                    Get Invited to a BSHIP Meeting
                    <i className="fas fa-chevron-right"></i>
                </a>
                </div>

        </div>

    </div>
</div>

      </FooterContainer>  
    );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
   padding-top: 3rem;
   color: var(--mainWhite)
  }
  .footer-bottom{
    padding-top:3rem;
    padding-bottom:3rem;

  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
  `;
  