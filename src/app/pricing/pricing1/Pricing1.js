import React, { useEffect } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './Pricing1.css';
const Pricing1 = () => {
  useEffect(() => {
    let i = 2;
    const radius = 200;

    const fields = document.querySelectorAll('.itemDot');
    const container = document.querySelector('.dotCircle');
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const radiusCalc = width / 2.5;
    const step = (2 * Math.PI) / fields.length;

    let angle = 0;
    fields.forEach((field) => {
      const x = Math.round(width / 2 + radiusCalc * Math.cos(angle) - field.offsetWidth / 2);
      const y = Math.round(height / 2 + radiusCalc * Math.sin(angle) - field.offsetHeight / 2);
      field.style.left = `${x}px`;
      field.style.top = `${y}px`;
      angle += step;
    });

    const handleClick = (e) => {
      const dataTab = e.currentTarget.dataset.tab;
      fields.forEach((item) => item.classList.remove('active'));
      e.currentTarget.classList.add('active');

      const items = document.querySelectorAll('.CirItem');
      items.forEach((item) => item.classList.remove('active'));
      document.querySelector(`.CirItem${dataTab}`).classList.add('active');

      i = dataTab;
      container.style.transform = `rotate(${360 - (i - 1) * 36}deg)`;
      container.style.transition = '2s';

      fields.forEach((item) => {
        item.style.transform = `rotate(${(i - 1) * 36}deg)`;
        item.style.transition = '1s';
      });
    };

    fields.forEach((item) => item.addEventListener('click', handleClick));

    const interval = setInterval(() => {
      let dataTab = document.querySelector('.itemDot.active').dataset.tab;
      if (dataTab > 6 || i > 6) {
        dataTab = 1;
        i = 1;
      }

      fields.forEach((item) => item.classList.remove('active'));
      document.querySelector(`[data-tab="${i}"]`).classList.add('active');

      const items = document.querySelectorAll('.CirItem');
      items.forEach((item) => item.classList.remove('active'));
      document.querySelector(`.CirItem${i}`).classList.add('active');

      i++;
      container.style.transform = `rotate(${360 - (i - 2) * 36}deg)`;
      container.style.transition = '2s';

      fields.forEach((item) => {
        item.style.transform = `rotate(${(i - 2) * 36}deg)`;
        item.style.transition = '1s';
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      fields.forEach((item) => item.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <section className="iq-features  float-left ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="holderCircle">
              <div className="round"></div>
              <div className="dotCircle">
                {[
                  { icon: 'fa-clock-o', tab: 1, title: 'Automate' },
                  { icon: 'fa-comments', tab: 2, title: 'Chat' },
                  { icon: 'fa-user', tab: 3, title: 'Responses' },
                  { icon: 'fa-tags', tab: 4, title: 'Tags' },
                  { icon: 'fa-upload', tab: 5, title: 'Sharing' },
                  { icon: 'fa-briefcase', tab: 6, title: 'Support' },
                ].map((item, index) => (
                  <span
                    key={index}
                    className={`itemDot ${index === 0 ? 'active' : ''} itemDot${item.tab}`}
                    data-tab={item.tab}
                  >
                    <i className={`fa ${item.icon}`}></i>
                    <span className="forActive"></span>
                  </span>
                ))}
              </div>
              <div className="contentCircle">
                {[
                  { tab: 1, title: 'Automate', content: ' Automate', icon: 'fa-clock-o' },
                  { tab: 2, title: 'Chat', content: ' Chat', icon: 'fa-comments' },
                  { tab: 3, title: 'Responses', content: ' Responses', icon: 'fa-user' },
                  { tab: 4, title: 'Tags', content: ' Tags', icon: 'fa-tags' },
                  { tab: 5, title: 'Sharing', content: ' Sharing', icon: 'fa-upload' },
                  { tab: 6, title: 'Support', content: ' Support', icon: 'fa-briefcase' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`CirItem title-box CirItem${item.tab} ${index === 0 ? 'active' : ''}`}
                  >
                    <h2 className="title">
                      <span>{item.title}</span>
                    </h2>
                    {/* <p>{item.content}</p> */}
                    <i className={`fa ${item.icon}`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
