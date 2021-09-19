import React from 'react'
import Helmet from 'react-helmet'

function Head() {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="charSet" />

            <title>Medilab Bootstrap Template - Index</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />

            {/* <!-- Favicons --> */}
            <link href="../../assets/img/favicon.png" rel="icon" />
            <link href="../../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

            {/* <!-- Google Fonts --> */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

            {/* <!-- Vendor CSS Files --> */}
            <link href="../../assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
            <link href="../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
            <link href="../../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
            <link href="../../assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
            <link href="../../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            <link href="../../assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
            <link href="../../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

            {/* <!-- Template Main CSS File --> */}
            <link href="../../assets/css/style.css" rel="stylesheet" />
        </Helmet>
    )
}

export default Head
