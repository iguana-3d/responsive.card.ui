import React from 'react';
import '../styles/responsive.card.ui.scss';


export default function ResponsiveCard() {
      return (
            <div className="container">
                  <div className="box">
                        <div className="imgBx">
                              <img src="/static/image1.jpg" />
                        </div>
                        <div className="content">
                              <h2>Robson<br /><span>
                                    Presidente e Desenvolvedor Grão Mestre
                        </span></h2>
                        </div>
                  </div>
                  <div className="box">
                        <div className="imgBx">
                              <img src="/static/image2.jpg" />
                        </div>
                        <div className="content">
                              <h2>Igor<br /><span>
                                   Desenvolvedor Júnior
                              </span></h2>
                        </div>
                  </div>
                  <div className="box">
                        <div className="imgBx">
                              <img src="/static/image3.jpg" />
                        </div>
                        <div className="content">
                              <h2>Jonas<br /><span>
                                    Designer UI UX
                              </span></h2>
                        </div>
                  </div>
            </div>
      )
}