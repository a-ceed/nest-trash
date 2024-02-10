class Head {




    render() {

        let htmlCatalog = '';



            htmlCatalog += `
      <title>International Trash Award — Award for Outstanding Contribution to Killing the Planet</title>
      <link rel="alternate" hreflang="en" href="https://internationaltrashaward.org/"/>
      <meta name="description" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet">
      <meta name="keywords" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet">
      <meta name="author" content="InternationalTrashAward">

      <!-- FB VK Open Graph -->
      <meta property="og:locale" content="en_EN"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet"/>
      <meta property="og:description" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet"/>
      <meta property="og:image" content="https://internationaltrashaward.org/../assets/images/international-trash-award-1200x630.png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:url" content="http://internationaltrashaward/index.html"/>
      <meta property="og:site_name" content="International Trash Award"/>
      <!-- Twitter -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="International Trash Award">
      <meta name="twitter:title" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet">
      <meta name="twitter:description" content="International Trash Award — Award for Outstanding Contribution to Killing the Planet">
      <meta name="twitter:image" content="http://internationaltrashaward/index.html">
    <!-- Metadata -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/ico/favicon.png" />
    <!-- CSS Plugins -->
    <link rel="stylesheet" href="assets/css/plugins.min.css">
    <!-- Custom CSS File -->
    <link rel="stylesheet" href="assets/css/style.css">
      <!-- jquery-2.1.3.min js -->
    
    
        
            `;



        ROOT_HEAD.innerHTML = htmlCatalog;
    }
}

const headPage = new Head();
headPage.render();