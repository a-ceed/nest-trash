class Company {




    render() {

        let htmlCatalog = '';

        CATALOG.forEach(({id, name, logo, count, link, counter}) => {

            htmlCatalog += `
                <a href="${link}">
                    <div class="album-item col-md-4 filtr-item" data-category="1">
                        <div class="my-flex-cont">
                            <div class="my-flex-box my-flex-box1">
                                <img src='${logo}' class='trash_logo'>
                            </div>
                            <div class="my-flex-box my-flex-box2">
                                <h7>${name}</h7>
                                <div class="stroke">
                                    <span class="counter">antirating:</span>
                                    <span id="${counter}" class="counter"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `;

        });

        ROOT_COMPANY.innerHTML = htmlCatalog;
    }
}

const companyPage = new Company();
companyPage.render();

