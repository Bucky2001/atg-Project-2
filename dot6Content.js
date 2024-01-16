const dot6Content = (
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
  const dot = 'dot6';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.getElementsByTagName('p')[0].innerText =
      'View Case Study →';

    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 678';

    leftImg.style = 'display:none';

    text1.innerHTML = `<h1><p class="text1p ${dot}Text1p1" >Developing ERP Solution for</p>Text Headline<p class="text1p ${dot}Text1p2">in furniture industry</p></h1>`;

    const images =
      '<div class="right-js-image dot6RightImg" style="z-index: 1;"><img src="./ScrollAnimation Task Assets/erp-app-development-service.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 680, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = `<p>View Case Study →</p>`;
    leftBottomHeadingText.innerHTML = `<h1>ABC 5</h1>
          <p class="left-box-textp">This is Sample Text for ABC 5.</p>`;

    leftImg.style = 'display:none';

    const images =
      '<div class="right-js-image dot6RightImg" style="z-index: 1;"><img src="./ScrollAnimation Task Assets/erp-app-development-service.png"/></div>';

    rightContainer.insertAdjacentHTML('afterbegin', images);
  }
};

export default dot6Content;
