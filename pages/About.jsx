import React, { useRef } from 'react';

import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import emailjs from '@emailjs/browser';

import { ImSpinner2 } from 'react-icons/im';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTiktok, FaTwitter } from 'react-icons/fa';

const About = ({ aboutData }) => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const loading = document.querySelector('.form__overlay--loading');
    const success = document.querySelector('.form__overlay--success');
    loading.classList += ' form__overlay--visible';
    emailjs
      .sendForm(
        'service_gcuh3wo',
        'template_wvowg9b',
        form.current,
        'DxerCU2Kpr5vNzBR_'
      )
      .then(
        (result) => {
          loading.classList.remove('form__overlay--visible');
          success.classList += ' form__overlay--visible';
          console.log(result.text);
        },
        (error) => {
          loading.classList.remove('form__overlay--visible');
          alert(
            'The email service is temporarily unavailable. Please contact me directly at sanctier.clothing@gmail.com'
          );
          console.log(error.text);
        }
      );
    form.current.reset;
  };

  return (
    <>
      <section className='about'>
        <h2 className='about__heading'>About Us</h2>
        <p className='about__sub'>
          {aboutData[0].paragraphone && aboutData[0].paragraphone}
        </p>
        <div className='about__container'>
          <div className='about__content'>
            <p className='about__info'>
              {aboutData[0].paragraphtwo && aboutData[0].paragraphtwo}
            </p>
            <img
              className='about__images'
              src={urlFor(aboutData[0].imageone)}
              alt=''
            />
          </div>
          <div className='about__content rev'>
            <img
              className='about__images'
              src={urlFor(aboutData[0].imagetwo && aboutData[0].imagetwo)}
              alt=''
            />
            <p className='about__info'>{aboutData[0].paragraphthree}</p>
          </div>
        </div>
      </section>
      <div id='contact'></div>
      <div className='contact__wrapper'>
        <div className='contact__container'>
          <div className='contact__left'>
            <div>
              <h3>Lets get in touch</h3>
              <p>
                Whether you have a question, want a refund or just want to
                connect shoot us a message in the contact form.
              </p>
              <p>
                For more info or to enquire about our products, and pricing feel
                free to get in touch.
              </p>
            </div>
            <div>
              <h3>Requirements for a refund</h3>
              <ol>
                <li>Within 14 days of purchase</li>
                <li>Proof of purchase</li>
              </ol>
            </div>
            <div>
              <h4>Connect with us on:</h4>
              <div className='contact__icons'>
                <a
                  className='contact__links'
                  href='https://www.instagram.com/sanctier.clothing/'
                  target='_blank'
                >
                  <AiFillInstagram />
                </a>
                <a
                  className='contact__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <AiFillFacebook />
                </a>
                <a
                  className='contact__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <FaTiktok className='fa' />
                </a>
                <a
                  className='contact__links'
                  href='https://google.com'
                  target='_blank'
                >
                  <FaTwitter className='fa' />
                </a>
              </div>
            </div>
          </div>
          <div className='contact__right'>
            <div className='contact__right-control'>
              <form ref={form} onSubmit={sendEmail}>
                <h3 className='form__heading'>Contact Us</h3>
                <div className='form'>
                  <div className='contact__top'>
                    <div className='contact__name'>
                      <label htmlFor='name'>Full Name</label>
                      <br />
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='small-input form-control'
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='contact__email'>
                      <label htmlFor='email'>Email Address</label>
                      <br />
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='small-input form-control'
                        placeholder='Email'
                        required
                      />
                    </div>
                  </div>
                  <div className='contact__subject'>
                    <label htmlFor='subject'>Subject</label>
                    <br />
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      className='form__input full-input form-control'
                      placeholder='Subject'
                      required
                    />
                  </div>
                  <div className='contact__message'>
                    <label htmlFor='message'>Message</label>
                    <br />
                    <textarea
                      className='form__input full-input form-control'
                      name='message'
                      id='message'
                      placeholder='Message'
                      required
                    />
                  </div>
                  <button className='form__btn' type='submit' value='Send'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className='form__overlay form__overlay--loading'>
              <ImSpinner2 className='spinner' />
            </div>
            <div className='form__overlay form__overlay--success'>
              Thanks for the message! Looking forward to speaking with you soon.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);

  return {
    props: {
      aboutData,
    },
  };
};

export default About;
