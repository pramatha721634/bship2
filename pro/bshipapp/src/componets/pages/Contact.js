import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
           <section className="my-5 py-5">
               <div className="container">
                   <div className="well well-sm">
                       <h4><strong>Our Location</strong></h4>

                   </div>
             
               <div className="row">
                   <div className="col-md-7">
                   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1UcZFyUnP9h33ViZXpszFyPGnTFmq_K_a" 
                   style={{
                  border: '0',
                  width: '100%',
                  height: '315px',
                  frameborder: '0'
                }}
                allowFullscreen>
                   </iframe>

                   </div>
                   <div className="col-md-5">
                      <center> <h4><strong>Contact Us</strong></h4></center>
                       <from>
                           <div className="form-group">
                               <input type="text" className="form-control"
                                placeholder="Name"/>
                           </div>
                        
                           <div className="form-group">
                               <input type="email" className="form-control"
                                placeholder="email"/>
                           </div>
                           <div className="form-group">
                               <input type="tel" className="form-control"
                                placeholder="phone"/>
                           </div>
                           <textarea
                             className="form-control"
                             cols="30"
                             rows="3"
                             placeholder="Message"
                            />
                             <Link className="btn btn-outline-primary text-uppercase mt-1">
                             <i className="fa fa-paper-plane-o" aria-hidden="true" />
                             <i className="fab fa-telegram-plane" />
                              &nbsp;Send
                             </Link>
                
                       </from>

                   </div>
                </div>
               </div>

           </section>
        );
    }
}

export default Contact;