const dot4Content = (
  {
    leftContainer,
    middleContainer,
    rightContainer,
    leftBottomBoxLeft,
    rightContainerContent,
    leftBottomHeadingText,
    img1,
    img2,
    leftImg,
    text1,
  },
  ringElement,
  device
) => {
  const dot = 'dot4';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  img1.classList.add(`${dot}Img1`);
  img2.classList.add(`${dot}Img2`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.getElementsByTagName('p')[0].innerText =
      'View Case Study →';
    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 456';

    rightContainerContent.style = 'top:-295px';

    img1.src = './ScrollAnimation Task Assets/domi-img1.png';

    img2.src =
      './ScrollAnimation Task Assets/ux-strategy-for-mobile-app-devlopment.png';

    leftImg.style = 'display:none';

    text1.innerHTML = `<h1><p class="text1p ${dot}Text1p1" >Redefining</p>UX Strategy<p class="text1p ${dot}Text1p2" >and UI design</p></h1>`;

    const images =
      '<div class="right-js-image dot4RightImg"><img class="img1" src="./ScrollAnimation Task Assets/pizza_box.png"/><img class="img2" src="./ScrollAnimation Task Assets/dominos-bread.png"/><img class="img3" src="./ScrollAnimation Task Assets/dominos-bread1.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 410, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = `<p>View Case Study →</p>`;
    leftBottomHeadingText.innerHTML = `<h1>ABC 3</h1>
          <p class="left-box-textp">This is Sample Text for ABC 3.</p>`;
    img1.src = './ScrollAnimation Task Assets/domi-img1.png';

    img2.src =
      './ScrollAnimation Task Assets/ux-strategy-for-mobile-app-devlopment.png';

    leftImg.style = 'display:none';

    const images =
      '<div class="right-js-image dot4RightImg"><img class="img1" src="./ScrollAnimation Task Assets/pizza_box.png"/><img class="img2" src="./ScrollAnimation Task Assets/dominos-bread.png"/><img class="img3" src="./ScrollAnimation Task Assets/dominos-bread1.png"/><img class="img4" src="./ScrollAnimation Task Assets/on-demand-app-development-company.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);
  }
};

export default dot4Content;
