class Footer {




    render() {

        let htmlCatalog = '';



            htmlCatalog += `
                
                        <div class="ms-footer">
          <div class="copyright"><div><a href="index.html" class="footerlink">International Trash Award</a></div> <div><a href="privacy.html" class="footerlink">Privacy Policy</a></div><div><a href="termsandconditions.html" class="footerlink">Terms and Conditions</a></div></div>
          <ul class="socials">
            <li><a href="#" class="socicon-facebook"></a></li>
            <li><a href="#" class="socicon-twitter"></a></li>
            <li><a href="#" class="socicon-instagram"></a></li>
            <li><a href="#" class="socicon-youtube"></a></li>
          </ul>
        </div>

                            
        
            `;



        ROOT_FOOTER.innerHTML = htmlCatalog;
    }
}

const footerPage = new Footer();
footerPage.render();