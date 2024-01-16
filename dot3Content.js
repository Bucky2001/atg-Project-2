const dot3Content = (
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
  const dot = 'dot3';
  leftContainer.classList.add(`${dot}LeftContainer`);
  middleContainer.classList.add(`${dot}MiddleContainer`);
  rightContainer.classList.add(`${dot}RightContainer`);
  img1.classList.add(`${dot}Img1`);
  img2.classList.add(`${dot}Img2`);
  text1.classList.add(`${dot}Text1`);

  if (device === 'window') {
    leftBottomBoxLeft.innerHTML = '<p>Coming soon</p>';
    leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 345';

    img1.src =
      './ScrollAnimation Task Assets/nasa-fitness-tracking-mobile-app.png';

    img2.src =
      './ScrollAnimation Task Assets/measure-total-body-weight-through-fitness-app.png';

    leftImg.style = 'display:none';

    text1.innerHTML = `<p class="text1p ${dot}Text1p1" >Powered by advance</p><img src="./ScrollAnimation Task Assets/nasa-mobile-app.png" style=" padding-left:250px" /><p class="text1p ${dot}Text1p2">Revolution</p>`;

    ringElement.style = `fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 275, 1000;`;
  }

  if (device === 'mobile') {
    leftBottomBoxLeft.innerHTML = `<p>CASE STUDY .</p><button style="
      background: white;
    color: black; font-size : 17px; font-weight:600">Coming Soon</button> `;
    leftBottomHeadingText.innerHTML = `<h1>ABC 2</h1>
          <p class="left-box-textp">This is Sample Text for ABC 2.</p>`;
    img1.src =
      './ScrollAnimation Task Assets/nasa-fitness-tracking-mobile-app.png';

    img2.src =
      './ScrollAnimation Task Assets/measure-total-body-weight-through-fitness-app.png';

    leftImg.style = 'display:none';
  }
};

export default dot3Content;
