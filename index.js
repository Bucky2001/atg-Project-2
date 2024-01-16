'use strict';

import dot1Content from './dot1Content.js';
import dot2Content from './dot2Content.js';
import dot3Content from './dot3Content.js';
import dot4Content from './dot4Content.js';
import dot5Content from './dot5Content.js';
import dot6Content from './dot6Content.js';
import dot7Content from './dot7Content.js';

const svgObject = document.querySelector('.svgAnimation');
const leftContainer = document.querySelector('.left-container');
const middleContainer = document.querySelector('.middle-container');
const rightContainer = document.querySelector('.right-container');
const leftBottomBoxLeft = document.querySelector('.left-bottom-box-left');
const rightContainerContent = document.querySelector(
  '.right-container-content'
);
const leftBottomHeadingText = document.querySelector('.left-box-text');
const img1 = rightContainer.getElementsByTagName('img')[0];
const img2 = rightContainer.getElementsByTagName('img')[1];
const leftImg = leftContainer.getElementsByTagName('img')[0];
const text1 = document.querySelector('.text1');

const dotContent = [
  dot1Content,
  dot2Content,
  dot3Content,
  dot4Content,
  dot5Content,
  dot6Content,
  dot7Content,
];

const doc = {
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
};

const backDotExtraRemover = () => {
  const rightJSImage = document.querySelector('.right-js-image');
  if (rightJSImage) {
    rightJSImage.remove();
  }
  rightContainerContent.style = '';
  leftBottomHeadingText.getElementsByTagName('h1')[0].innerText = 'ABC 123';
  text1.style = '';
  img1.src = '';

  img1.style = '';

  img2.src = '';
  img2.style = '';
  leftContainer.className = 'left-container';
  middleContainer.className = 'middle-container';
  rightContainer.className = 'right-container';
  img1.className = 'right-container-img1';
  img2.className = 'right-container-img2';
  leftImg.className = 'left-box-img';
  text1.className = 'text1';
};

const forWindow = () => {
  if (window.innerWidth > 767) {
    let currentDot = 1;
    leftBottomHeadingText.innerHTML = `<h1>ABC 123</h1>
          <p class="left-box-textp">We are the best Web Development <p class="left-box-textp">company in the word</p></p>`;
    const svgDoc = svgObject.contentDocument;
    const ringElement = svgDoc.querySelector('#Opaque_Ring');

    const svgAnimElement = (i) => {
      const dotElement = svgDoc.querySelector(`#Dots${i}`);
      const dotFill = dotElement.querySelector(`.dotsfill${i}`);
      const dotBorder = dotElement.querySelector(`.dotsstro${i}`);
      return [dotElement, dotFill, dotBorder];
    };

    const svgAnim = (num) => {
      backDotExtraRemover();
      let i = num;
      while (i > 1) {
        const [_, dotFill, dotBorder] = svgAnimElement(i);

        dotFill.style = 'fill: rgb(0, 146, 255); opacity: 1;';
        dotBorder.style =
          'opacity: 1; fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10;';
        i--;
      }
      i = num + 1;
      while (i < 8 && i > 1) {
        const [_, dotFill, dotBorder] = svgAnimElement(i);

        dotFill.style = 'fill: rgb(255, 255, 255); opacity: 0.4;';
        dotBorder.style =
          'opacity: 0.4; fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10;';

        i++;
      }
    };

    const contentRender = (i) => {
      const device = 'window';
      svgAnim(i);
      dotContent[i - 1](doc, ringElement, device);
      currentDot = i;
      window.focus();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        if (currentDot > 1) {
          contentRender(currentDot - 1);
        }
      } else if (event.key === 'ArrowRight') {
        if (currentDot < 7) {
          contentRender(currentDot + 1);
        }
      }
    };

    const handleScroll = (event) => {
      if (event.deltaY < 0) {
        if (currentDot > 1) {
          contentRender(currentDot - 1);
        }
      } else {
        if (currentDot < 7) {
          contentRender(currentDot + 1);
        }
      }
    };

    for (let i = 1; i < 8; i++) {
      const [dotElement] = svgAnimElement(i);
      dotElement.addEventListener('click', () => contentRender(i));
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll);
  }
};

const forMobile = () => {
  if (window.innerWidth < 767) {
    const dotAnimContainer = document.querySelector('.dotContainer');
    let currentDot = 1;
    leftBottomHeadingText.innerHTML = `<h1>ABC 123</h1>
          <p class="left-box-textp">This is Sample Text for ABC 123. This is Sample Text for ABC 123. </p>`;
    const svgDoc = svgObject.contentDocument;
    const ringElement = svgDoc.querySelector('#Opaque_Ring');

    const svgAnimElement = (i) => {
      const dotElement = svgDoc.querySelector(`#Dots${i}`);
      const dotFill = dotElement.querySelector(`.dotsfill${i}`);
      const dotBorder = dotElement.querySelector(`.dotsstro${i}`);
      return [dotElement, dotFill, dotBorder];
    };

    let startX = 0;
    let endX = 0;

    const activateAnimeDot = function (slide) {
      backDotExtraRemover();
      document
        .querySelectorAll('.dots__dot')
        .forEach((dot) => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

    const contentRender = (i) => {
      const device = 'mobile';
      activateAnimeDot(i);
      dotContent[i - 1](doc, ringElement, device);
      currentDot = i;
      window.focus();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        if (currentDot > 1) {
          contentRender(currentDot - 1);
        }
      } else if (event.key === 'ArrowRight') {
        if (currentDot < 7) {
          contentRender(currentDot + 1);
        }
      }
    };

    const handleMouseDown = (event) => {
      startX = event.clientX;
    };

    const handleMouseMove = (event) => {
      endX = event.clientX;
    };

    const handleMouseUp = () => {
      const threshold = 50;
      const deltaX = endX - startX;

      if (deltaX > threshold) {
        if (currentDot > 1) {
          contentRender(currentDot - 1);
        }
      } else if (deltaX < -threshold) {
        if (currentDot < 7) {
          contentRender(currentDot + 1);
        }
      }
    };

    for (let i = 1; i < 8; i++) {
      const [dotElement] = svgAnimElement(i);
      dotElement.addEventListener('click', () => contentRender(i));
    }

    dotAnimContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const slide = parseInt(e.target.dataset.slide);
        contentRender(slide);
      }
    });

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }
};

const eventHandler = () => {
  if (window.innerWidth > 767) forWindow();
  if (window.innerWidth < 767) forMobile();
};

window.addEventListener('load', eventHandler);
window.addEventListener('resize', eventHandler);
