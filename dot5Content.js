const dot5Content = (
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
  const dot = 'dot5';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  img1.classList.add(`${dot}Img1`);
  img2.classList.add(`${dot}Img2`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.getElementsByTagName('p')[0].innerText =
      'View Case Study →';

    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 567';

    img1.src = './ScrollAnimation Task Assets/karavan_2.png';

    img2.src =
      './ScrollAnimation Task Assets/developers-for-social-media-app.png';

    leftImg.style = 'display:none';

    text1.innerHTML = `<h1><p class="text1p ${dot}Text1p1" >Text Headline</p>Text Headline<p class="text1p ${dot}Text1p2">Footer headline</p></h1>`;

    const images =
      '<div class="right-js-image dot5RightImg"><img class="img1" src="./ScrollAnimation Task Assets/karavan-social-networking-app-screen.png"/><img class="img2" src="./ScrollAnimation Task Assets/social-networking-app-case-study.png"/><img class="img3" src="./ScrollAnimation Task Assets/karavan-social-networking-app-screen-2.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 540, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = `<p>View Case Study →</p>`;
    leftBottomHeadingText.innerHTML = `<h1>ABC 4</h1>
          <p class="left-box-textp">This is Sample Text for ABC 4.</p>`;

    img1.src = './ScrollAnimation Task Assets/karavan_2.png';

    img2.src =
      './ScrollAnimation Task Assets/developers-for-social-media-app.png';

    leftImg.style = 'display:none';

    const images =
      '<div class="right-js-image dot5RightImg"><img class="img1" src="./ScrollAnimation Task Assets/karavan-social-networking-app-screen.png"/><img class="img2" src="./ScrollAnimation Task Assets/social-networking-app-case-study.png"/><img class="img3" src="./ScrollAnimation Task Assets/karavan-social-networking-app-screen-2.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);
  }
};

export default dot5Content;
