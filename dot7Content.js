const dot7Content = (
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
  const dot = 'dot7';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  img1.classList.add(`${dot}Img1`);
  img2.classList.add(`${dot}Img2`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.innerHTML = '<p>Coming soon</p>';

    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 23478';

    img1.src = './ScrollAnimation Task Assets/melltoo-img2.png';

    img2.src = './ScrollAnimation Task Assets/melltoo-img1.png';

    leftImg.src =
      './ScrollAnimation Task Assets/mobile-app-of-the-year-by-entrepreneur.png';
    leftImg.style = 'display:block';

    text1.innerHTML = `<h1><p class="text1p ${dot}Text1p1">Biggest Classifieds</p>East Asia<p class="text1p ${dot}Text1p2">Countries</p></h1>`;

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 820, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = `<p>CASE STUDY .</p><button style="
      background: white;
    color: #01824d; font-size : 17px; font-weight:600">Coming Soon</button> `;
    leftBottomHeadingText.innerHTML = `<h1>XYZ 123</h1>
          <p class="left-box-textp">This is Sample Text for XYZ 123.</p>`;

    img1.src = './ScrollAnimation Task Assets/melltoo-img2.png';

    img2.src = './ScrollAnimation Task Assets/melltoo-img1.png';

    leftImg.src =
      './ScrollAnimation Task Assets/mobile-app-of-the-year-by-entrepreneur.png';

    leftImg.style = `display:block;     position: relative;
    top: -25px;
    left: 10px;
    width: auto;
    height: 90px;
    background-color: #fff1ff;
    border: ##01824d solid;
    border-radius: 15px;`;
  }
};

export default dot7Content;
