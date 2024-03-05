'use strict';
class Vote {
    render() {
        let htmlCatalog = '';
        let value = CONSTNAME;
            htmlCatalog += `
<div class="ms-section__block">
    <div class="ms-page-title">
        <h2 class="page-header">${value}</h2>
        <div class="post-item__date"><a href="nominees-international-trash-award.html" title="link">&#8592; Nominees</a></div>
    </div>
</div>
        <!-- Page Content -->
<div class="ms-section__block">
    <div id="ms-blog-post" class="row">
        <div class="col-md-8">       
        <!-- Form -->
        <form id="form" action="https://docs.google.com/forms/d/e/1FAIpQLSeNGrZ0prkxw24jesu9K3l-BDmsNYro-zjOc5pA4uCDu5jFMQ/formResponse"
        method="post" target="hidden_iframe" onsubmit="submitted=true;">
        <div class="row">
        <div id="info"></div>
        <div class="form-group col-md-12">
            <input name="entry.1181447888" type="text" class="form-control counrty-form" value="${value}" autocomplete="off">
        </div>
        <div class="form-group col-md-12">
            <input disabled name="entry.363729782" type="text" class="form-control" value="Vote for a: ${value}" autocomplete="off">
        </div>
        <div class="form-group col-md-12">
            <input name="entry.990117292" type="text" class="form-control" id="cl" placeholder="Name*" autocomplete="off">
        </div>
        <div class="form-group col-md-12">
            <input name="entry.1079516199" type="text"  class="form-control" placeholder="Country" autocomplete="off">
        </div>
        <div class="form-group col-md-12">
            <input name="entry.1687308716" type="text"  class="form-control" placeholder="Your web page" autocomplete="off">
        </div>
        <div class="form-group col-md-12">
            <input name="entry.1165884763" type="email" class="form-control" placeholder="Email*">
        </div>
        <div class="form-group col-md-12">
            <textarea name="entry.1121191870" class="form-control" id="message" placeholder="Argument your opinion*"></textarea>
        </div>
        <div class="col-md-12">
            <div class="formname">
                <input id="checkbox" type="checkbox" name="checkbox" onchange="document.getElementById('submit').disabled = !this.checked;" />
                <label for="checkbox">I agree with the Privacy Policy and User Agreement</label>
                <div class="ms-button" data-title="Send" onclick="stat()">Send
                    <input type="submit" disabled="disabled" name="submit" id="submit" value="" />
                </div>
            </div>
        </div>
        </div>
        </form>
<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe"
style="display:none;" onload="if(submitted)
{window.location='thanks.html';}"></iframe>

<form action="https://docs.google.com/forms/d/e/1FAIpQLSeNGrZ0prkxw24jesu9K3l-BDmsNYro-zjOc5pA4uCDu5jFMQ/formResponse" method="post"
target="hidden_iframe" onsubmit="submitted=true;">
        </div>
        </div>
     </div>
</div>
                `;
        ROOT_VOITE.innerHTML = htmlCatalog;
    }
}
const votePage = new Vote();

votePage.render();