const dot1Content = (
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
  const dot = 'dot1';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  leftImg.classList.add(`${dot}LeftImg`);

  if (device === 'window') {
    leftBottomBoxLeft.innerHTML = '<p>View Case Study →</p>';

    img1.src =
      './ScrollAnimation Task Assets/nexgtv-entertainment-mobile-app-development.png';

    img2.src = './ScrollAnimation Task Assets/nexgtv-mobile-app-ui-design.png';

    leftImg.src =
      './ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png';

    leftImg.style = 'display:block';
    text1.classList.add('text1');

    text1.innerHTML =
      '<h1>25M+ Downloads<p class="text1p">on app store & google play</p></h1>';

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 0, 1000;`;
  }
  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = '<p>View Case Study →</p>';

    img1.src =
      './ScrollAnimation Task Assets/nexgtv-entertainment-mobile-app-development.png';

    img2.src = './ScrollAnimation Task Assets/nexgtv-mobile-app-ui-design.png';

    leftImg.src =
      './ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png';

    leftImg.style = `display:block;     position: relative;
    top: -25px;
    left: 10px;
    width: auto;
    height: 90px;
    background-color: #fff1ff;
    border: #6411a9 solid;
    border-radius: 25px;`;
  }
};

export default dot1Content;
