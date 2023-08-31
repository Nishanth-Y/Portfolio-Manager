import React, { PureComponent } from 'react'

export class portfolio extends PureComponent {
  render() {
    return (
      <div>
        {/* <Fragment> */}
        <div class="profile-section">
        <div class="profile-img">  
            {/* <img src="images/ProfilePicture.png" alt="profile image"/> */}
        </div>
        <div class="information">
            <h1 class="name">Adarsha M</h1>
            <h2>Software Engineer</h2>
            <h2>BMSIT&M</h2>
        </div>  
    </div>

  <section class="about" id="about">
      <div class="about-company">
          <h1>About <span>Company</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.</p>
            <a href="#" style="display: inline-block;"><button class="read-more">Read More</button></a>
      </div>
  </section>


  <section class="contact" id="contact">
      <div class="contact-me">
          <h1>Contact <span>Me</span></h1>
          <div class="contact-btns">
            <div class="contact-link">
                <a href="https://www.linkedin.com/in/adarsha-m-a77a6b229/" target="_blank"><i class='bx bxl-linkedin'></i></a>
            </div>
            <div class="contact-link">
                <a href="https://github.com/Adi-adarsha" target="_blank"><i class='bx bxl-github'></i></a>
            </div>
            <div class="contact-link">
                <a href="mailto: 1by20cs010@bmsit.in" target="_blank"><i class='bx bxl-gmail'></i></a>
            </div>
            <div class="contact-link">
                <a href="https://instagram.com/adi_adarsha_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
            </div>
            <div class="contact-link">
              <a href="#" target="_self"><i class='bx bxl-facebook'></i></a>
            </div>
            <div class="contact-link">
              <a href="#" target="_self"><i class='bx bxl-twitter'></i></a>
            </div>
            <div class="contact-link">
              <a href="#" target="_self"><i class='bx bxl-slack'></i></a>
            </div>
            <div class="contact-link">
              <a href="#" target="_self"><i class='bx bxl-twitch'></i></a>
            </div>
          </div>
      </div>
  </section>


  <section class="gallery" id="gallery">
    <div class="gallery-contents">
      <h1>Gallery</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
    {/* </Fragment> */}
      </div>
    )
  }
}

export default portfolio