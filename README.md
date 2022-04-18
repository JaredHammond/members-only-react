<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JaredHammond/members-only-react">
    <img src="./public/img/logo-monochrome.svg" alt="Logo" height="50">
  </a>

  <p align="center">
    A secret message board where anyone can see the messages, but only members know who authored the posts
    <br />
    <br />
    <a href="https://github.com/JaredHammond/members-only-react">View Demo</a>
    ·
    <a href="https://github.com/JaredHammond/members-only-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/JaredHammond/members-only-react/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This project uses [React.js](https://reactjs.org/) as the client front end and an [Express](https://expressjs.com/) server as the api server.

### Prerequisites

In order to make your own version of MembersOnly, you first need to create a MongoDB databse. Free shared instances can be created at [MondoDB](https://www.mongodb.com/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JaredHammond/members-only-react.git
   ```
2. Install NPM packages (for both the React app and the api)
   ```sh
   npm install
   cd api
   npm install
   ```
3. Create a `.env` file in the api folder.
   ```sh
   touch .env
   ```
4. Add your config parameters to the `.env` file

   ```
   DB_URI=[Your MondoDB URI]

   JWT_SECRET=[Your secret to sign JSON Web Tokens]

   MEMBER_SECRET=[Your secret password to become a member]

   ADMIN_SECRET=[Your secret password to become an admin]
   ```

5. Start the API and then start the React app
   ```sh
   # Start api
   npm start
   # Move to React app home directory
   cd ..
   #Start React app
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@JaredHammondDev](https://twitter.com/jaredhammonddev) - hello@jaredhammond.dev

Project Link: [https://github.com/JaredHammond/members-only-react](https://github.com/JaredHammond/members-only-react)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [The Odin Project](https://theodinproject.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JaredHammond/members-only-react.svg?style=for-the-badge
[contributors-url]: https://github.com/JaredHammond/members-only-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JaredHammond/members-only-react.svg?style=for-the-badge
[forks-url]: https://github.com/JaredHammond/members-only-react/network/members
[stars-shield]: https://img.shields.io/github/stars/JaredHammond/members-only-react.svg?style=for-the-badge
[stars-url]: https://github.com/JaredHammond/members-only-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/JaredHammond/members-only-react.svg?style=for-the-badge
[issues-url]: https://github.com/JaredHammond/members-only-react/issues
[license-shield]: https://img.shields.io/github/license/JaredHammond/members-only-react.svg?style=for-the-badge
[license-url]: https://github.com/JaredHammond/members-only-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/JaredCHammond
[product-screenshot]: ./images/screenshot.jpg
