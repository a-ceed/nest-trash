class Header {




    render() {

        let htmlCatalog = '';



            htmlCatalog += `
                
                        <nav class="ms-nav">
          <div class="ms-logo">
            <a href="index.html" data-type="page-transition">
              <div class="logo-dark"><img src="logo-dark.svg" alt="logo image"></div>
              <div class="logo-light current"><img src="logo-light.svg" alt="logo image"></div>
            </a>
          </div>



          <button class="hamburger" type="button" data-toggle="navigation">

 <span class="hamburger-box">

          </span>

          <span class="hamburger-box">
            <span class="hamburger-label">menu</span>
            <span class="hamburger-inner"></span>
          </span>
          </button>
          <div class="height-full-viewport">
            <ul class="ms-navbar">
              <!-- Nav Link -->
              <li class="nav-item">
                <a href="index.html" data-type="page-transition">
                  <span class="ms-btn">Home</span>
                  <span class="nav-item__label"></span>
                </a>
              </li>
              <!-- Nav Link -->
              <li class="nav-item">
                <a href="nominees-international-trash-award.html" data-type="page-transition">
                  <span class="ms-btn">Nominees</span>
                  <span class="nav-item__label"></span>
                </a>
              </li>
              

              <!-- Nav Link -->
              <li class="nav-item">
                <a href="internationaltrashaward.html" data-type="page-transition">
                  <span class="ms-btn">About</span>
                  <span class="nav-item__label"></span>
                </a>
              </li>
              <!-- Nav Link -->
              <li class="nav-item">
                <a href="contact.html" data-type="page-transition">
                  <span class="ms-btn">Contacts</span>
                  <span class="nav-item__label"></span>
                </a>
              </li>

                            <!-- Nav Link -->
<!--              <li class="nav-item">-->
<!--                <a href="blog.html" data-type="page-transition">-->
<!--                  <span class="ms-btn">Blog</span>-->
<!--                  <span class="nav-item__label"></span>-->
<!--                </a>-->
<!--              </li>-->

            </ul>
          </div>



        </nav>
        
            `;



        ROOT_HEADER.innerHTML = htmlCatalog;
    }
}

const headerPage = new Header();
headerPage.render();