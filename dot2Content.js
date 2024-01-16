const dot2Content = (
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
  const dot = 'dot2';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  img1.classList.add(`${dot}Img1`);
  img2.classList.add(`${dot}Img2`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.innerHTML = '<p>Coming soon</p>';
    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 234';

    img1.src =
      './ScrollAnimation Task Assets/veme-blockchain-app-developed.png';

    img2.src = './ScrollAnimation Task Assets/veme-app-ui-design.png';

    leftImg.style = 'display:none';

    text1.innerHTML =
      '<h1><p class="text1p dot2Text1p1">The Next Big</p>Blockchain<p class="text1p dot2Text1p2">Revolution</p></h1>';

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 135, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML =
      '<p>CASE STUDY .</p><button>Coming Soon</button> ';
    leftBottomHeadingText.innerHTML = `<h1>ABC 1</h1>
          <p class="left-box-textp">This is Sample Text for ABC 1.</p>`;

    img1.src =
      './ScrollAnimation Task Assets/veme-blockchain-app-developed.png';

    img2.src = './ScrollAnimation Task Assets/veme-app-ui-design.png';

    leftImg.style = 'display:none';
  }
};

export default dot2Content;
