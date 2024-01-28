import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core'
import { Icon } from '@iconify/react'
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])

const clients = [
  {
    name: 'Jubra Oday',
    image: '/clients/jubran.png',
    type: (
      <>
        Client{' '}
        <Icon icon="twemoji:flag-germany" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      "Fast, competent, caring, flexible :) | Amazing. He offers professional work, besides being initiative for providing great suggestions. He is open to listen carefully and continuously adapt the UI/UX to the user's requirements.",
  },
  {
    name: 'Cétaud Michel',
    image: '/clients/cetaud.png',
    type: (
      <>
        Client{' '}
        <Icon icon="twemoji:flag-belgium" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      'I cannot thank you enough for the impeccable and highly professional work you have done on the application. Your attentiveness to my needs, coupled with your quick and efficient solutions, made the collaboration an absolute pleasure. I wholeheartedly recommend you to anyone in need of a developer.',
  },
  {
    name: 'Milan',
    image: '/img/fiverr.png',
    type: (
      <>
        Client{' '}
        <Icon
          icon="emojione-v1:flag-for-serbia"
          fontSize={'18px'}
          style={{ marginLeft: '2px', marginBottom: '-4px' }}
        />
      </>
    ),
    review:
      "I'm extremely pleased with the level of communication throughout the process. The service provided was exactly as described, meeting my expectations. A heartfelt thank you for a job well done.",
  },
  {
    name: 'Marissan Clark',
    image: '/clients/marissa.png',
    type: (
      <>
        Client{' '}
        <Icon
          icon="twemoji:flag-us-outlying-islands"
          fontSize={'18px'}
          style={{ marginLeft: '2px', marginBottom: '-4px' }}
        />
      </>
    ),
    review:
      'I wholeheartedly recommend this seller with a perfect 10/10 rating. The experience was exceptional and exceeded my expectations. I look forward to working with them again in the future.',
  },
  {
    name: 'PGW',
    image: '/clients/pwg.png',
    type: (
      <>
        Client{' '}
        <Icon icon="twemoji:flag-pakistan" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      "I recently placed my second order with Akhtar and I must say, his skills are truly impressive. I greatly appreciate his expertise and the outstanding results he delivered. I'm already looking forward to placing another order soon. Thank you for your exceptional work!",
  },
  {
    name: 'Hyxofer',
    image: '/img/fiverr.png',
    type: (
      <>
        Client{' '}
        <Icon icon="twemoji:flag-netherlands" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      'My experience with Akhtar was outstanding. He is incredibly user-friendly, ensuring a seamless process from start to finish. True to his word, he delivered the files exactly as promised. I wholeheartedly recommend his service for a reliable and top-notch experience. Thank you, Akhtar!',
  },
  {
    name: 'John Jordan ',
    image: '/clients/john.png',
    type: (
      <>
        Client{' '}
        <Icon
          icon="twemoji:flag-us-outlying-islands"
          fontSize={'18px'}
          style={{ marginLeft: '2px', marginBottom: '-4px' }}
        />
      </>
    ),
    review:
      'Great work. This is my second order and I am happy. He is always helpful and communicates effectively. This is important when searching for gig fulfillment on Fiverr.',
  },
  {
    name: 'Sean James',
    image: '/clients/sean.png',
    type: (
      <>
        Client <Icon icon="twemoji:flag-canada" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      "I had an excellent experience with this seller. Their level of understanding was remarkable, and they responded promptly and efficiently. The seller's commitment to customer satisfaction was evident, making them a reliable choice. I highly recommend trying out their services for a top-notch experience.",
  },
  {
    name: 'Shino Bu',
    image: '/clients/shinobu.png',
    type: (
      <>
        Client <Icon icon="twemoji:flag-japan" fontSize={'18px'} style={{ marginLeft: '2px', marginBottom: '-4px' }} />
      </>
    ),
    review:
      "I am impressed by the seller's professionalism and understanding throughout the entire process. They approached the task with a serious and diligent attitude, ensuring the best possible outcome. Their understanding of my needs was evident, and they delivered excellent results. I highly commend their commitment and recommend their services.",
  },
]

function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="skills__section__header">
        <i className="uil uil-arrow-circle-left home__scroll-mouse swiper-button-prev-test"></i>
        <div>
          <h2 className="section__title">Testimonial</h2>
          <span className="section__subtitle">My client saying</span>
        </div>
        <i className="uil uil-arrow-circle-right home__scroll-mouse swiper-button-next-test"></i>
      </div>

      <div className="testimonial__container container">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-test',
            prevEl: '.swiper-button-prev-test',
          }}
          grabCursor={true}
          spaceBetween={48}
          className="mySwiper"
          style={{ display: 'grid' }}
          loop
        >
          {clients.map((client) => {
            return (
              <SwiperSlide key={client.name}>
                <div className="testimonial__content testimonial__card">
                  <div className="testimonial__overlay"></div>
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={client.image} className="testimonial__img" alt="testimonal"></img>

                      <div>
                        <h3 className="testimonial__name">{client.name}</h3>
                        <span className="testimonial__client">{client.type}</span>
                      </div>
                    </div>

                    <div>
                      <Icon icon="ic:sharp-star-rate" color="#FDD835" fontSize={25} />
                      <Icon icon="ic:sharp-star-rate" color="#FDD835" fontSize={25} />
                      <Icon icon="ic:sharp-star-rate" color="#FDD835" fontSize={25} />
                      <Icon icon="ic:sharp-star-rate" color="#FDD835" fontSize={25} />
                      <Icon icon="ic:sharp-star-rate" color="#FDD835" fontSize={25} />
                    </div>
                  </div>

                  <p className="testimonial__description">{client.review}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
