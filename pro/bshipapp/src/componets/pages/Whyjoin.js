import React, { Component } from 'react';

class Whyjoin extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron img-jmbo ">
                        <div class="container">
                                <center><h1 className="text-light font-italic ">Why join BSHIP</h1></center>
                        </div>
                </div>
                <div className="container">
                                {/* col-1 */}
                        <div className="row justify-content-center">
                            <div className="col-sm-6 call-to-action py-2">
                                <img class="border border-danger rounded-circle" src="http://bship.azurewebsites.net/images/buss.JPG" style={{width:400}}/>
                            </div>
                            <div className="col-sm-6 py-2 ">
                                <h2 className="text-danger font-italic">Business</h2><p></p>
                                <p className="text-justify">Business networking is a valuable way to gain new clients and to build a sustainable business, Visibility is all not about how many you know, it`s about how many know you. Being visible and getting noticed is the biggest benefit of networking, Networking provides you a great source of connections and yields to a network of networks which results in successful transactions.</p>
                            </div>
                        </div>
                                {/* col-2 */}
                        <div className="row justify-content-center">
                            <div className="col-sm-6 call-to-action py-2">
                                <img class="border border-danger rounded-circle" src="http://bship.azurewebsites.net/images/SO1.JPG" style={{width:400}}/>
                            </div>
                            <div className="col-sm-6 py-2 ">
                                <h2 className="text-danger font-italic">Support</h2><p></p>
                                <p className="text-justify ">Allows to connect people and collaborate with each other, Provides an opportunity for joint ventures, Provides a way to get into partnerships, By indulging in meetings, it improves speaking and writing skills and most importantly people management.</p>
                            </div>
                        </div>
                                {/* col-3 */}
                        <div className="row justify-content-center">
                            <div className="col-sm-6 call-to-action py-2">
                                <img class="border  rounded-circle" src="http://bship.azurewebsites.net/images/helpp.JPG" style={{width:400}}/>
                            </div>
                            <div className="col-sm-6 py-2 ">
                                <h2 className="text-danger font-italic">Help</h2><p></p>
                                <p className="text-justify">By exchanging business within a community leads to community growth, Provide sessions and trainings for skill development, Scope to exercise the expertise and creativity by taking up roles and responsibilities which in turn will help in increasing visibility, Build confidence by being innovative in presenting yourself.</p>
                            </div>
                        </div>
                                {/* col-4 */}
                        <div className="row justify-content-center">
                            <div className="col-sm-6 call-to-action py-2">
                                <img class="border border-danger rounded-circle" src="http://bship.azurewebsites.net/images/INFO.JPG" style={{width:400}}/>
                            </div>
                            <div className="col-sm-6 py-2 ">
                                <h2 className="text-danger font-italic">Business</h2><p></p>
                                <p className="text-justify">Business networking is a valuable way to gain new clients and to build a sustainable business, Visibility is all not about how many you know, it`s about how many know you. Being visible and getting noticed is the biggest benefit of networking, Networking provides you a great source of connections and yields to a network of networks which results in successful transactions.</p>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

export default Whyjoin;