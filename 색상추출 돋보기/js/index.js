// /*
// class App {
//   constructor() {
//     this.canvas = document.createElement("canvas");
//     document.body.appendChild(this.canvas);
//     this.canvas.setAttribute("id", "palette");
//     this.ctx = this.canvas.getContext("2d");

//     this.init();
//   }

//   init() {
//     this.stageWidth = 300;
//     this.stageHeight = 300;
//     this.canvas.width = this.stageWidth;
//     this.canvas.height = this.stageHeight;
//     this.createPalette();
//     this.gradientSlider = new GradientSlider();
//   }

//   createPalette() {
//     this.ctx.fillStyle = "red";
//     this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

//     const whiteGradient = this.ctx.createLinearGradient(
//       0,
//       0,
//       this.canvas.width,
//       0
//     );
//     whiteGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
//     whiteGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
//     this.ctx.fillStyle = whiteGradient;
//     this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

//     const blackGradient = this.ctx.createLinearGradient(
//       0,
//       0,
//       0,
//       this.stageHeight
//     );
//     blackGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
//     blackGradient.addColorStop(1, "rgba(0, 0, 0, 1)");
//     this.ctx.fillStyle = blackGradient;
//     this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
//   }
// }

// class GradientSlider {
//   constructor() {
//     this.canvas = document.createElement("canvas");
//     this.canvas.setAttribute("id", "gradient-slider");
//     document.body.appendChild(this.canvas);
//     this.ctx = this.canvas.getContext("2d");

//     this.init();
//   }

//   init() {
//     this.stageWidth = 20;
//     this.stageHeight = 300;
//     this.canvas.width = this.stageWidth;
//     this.canvas.height = this.stageHeight;
//     this.createGradientSlider();
//   }

//   createGradientSlider() {
//     const gradient = this.ctx.createLinearGradient(0, 0, 0, this.stageHeight);
//     gradient.addColorStop(0.0, "hsl(0, 100%, 50%)");
//     gradient.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
//     gradient.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
//     gradient.addColorStop(0.5, "hsl(180, 100%, 50%)");
//     gradient.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
//     gradient.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
//     gradient.addColorStop(1.0, "hsl(360, 100%, 50%)");
//     this.ctx.fillStyle = gradient;
//     this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
//   }
// }

// window.onload = () => {
//   new App();
// };
// */
// const { body } = document;
// const qs = document.querySelector.bind(document);

// const canvas = document.createElement("canvas");
// canvas.style.position = "absolute";
// canvas.style.top = "0";
// canvas.style.left = "0";
// document.body.appendChild(canvas);
// const ctx = canvas.getContext("2d");

// const tempImg = document.createElement("img");
// tempImg.addEventListener("load", onTempImageLoad);

// const targetImg = document.createElement("img");
// body.appendChild(targetImg);

// function onButtonClick() {
//   const tempelement = qs("body");
//   const element = document.createElement("div");
//   element.innerHTML = tempelement.innerHTML;
//   const { offsetWidth, offsetHeight } = tempelement;
//   Promise.all([getStyleInlined(qs("style")), getXHTMLInlined(element)])
//     .then(([style, html]) => {
//       const svgString = getSVGString(
//         offsetWidth,
//         offsetHeight,
//         `<style>${style}</style>`,
//         html
//       );
//       /*const iframe = document.createElement('iframe')
//         body.appendChild(iframe)
//         const {contentWindow:{document:doc}} = iframe
//         doc.open()
//         doc.write(svgString)
//         doc.close()*/
//       tempImg.src = "data:image/svg+xml," + encodeURIComponent(svgString);
//       canvas.width = offsetWidth;
//       canvas.height = offsetHeight;
//       //body.appendChild(tempImg)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// function onTempImageLoad({ target }) {
//   ctx.drawImage(target, 0, 0);
//   targetImg.src = canvas.toDataURL();
// }

// function getSVGString(w, h, style, html) {
//   return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}px" height="${h}px"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${style}${html}</div></foreignObject></svg>`;
// }

// function getStyleInlined(styleElement) {
//   const style = styleElement.innerHTML;
//   const match = style.match(/url\(([^)]+)\)/g) || [];
//   return Promise.all(
//     match.map((s) => {
//       const uri = s.match(/url\(['"]?([^'")]+)['"]?\)/).pop();
//       return loadImageBase64(uri)
//         .then((img) => [s, s.replace(uri, img)])
//         .catch((err) => console.log(err));
//     })
//   )
//     .then((replacements) =>
//       replacements.reduce(
//         (acc, replacement) => acc.replace(...replacement),
//         style
//       )
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// }

// function getXHTMLInlined(element) {
//   return getOuterHTMLInlined(element).then(htmlToXHTML);
// }

// function getOuterHTMLInlined(element) {
//   const clone = element.cloneNode(true);
//   const images = clone.querySelectorAll("img");
//   console.log(clone.outerHTML);
//   return Promise.all(
//     Array.from(images).map((image) =>
//       loadImageBase64(image.src).then((s) => (image.src = s))
//     )
//   ).then(() => clone.outerHTML);
// }

// function loadImageBase64(src) {
//   return new Promise((resolve, reject) => {
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     const img = document.createElement("img");
//     img.crossOrigin = "Anonymous";
//     img.addEventListener("error", reject);
//     img.addEventListener("load", ({ target }) => {
//       canvas.width = target.naturalWidth;
//       canvas.height = target.naturalHeight;
//       ctx.drawImage(target, 0, 0);
//       resolve(canvas.toDataURL());
//     });
//     img.src = src;
//   });
// }

// function htmlToXHTML(html5) {
//   const doc = new DOMParser().parseFromString(html5, "text/html");
//   console.log(doc);
//   return new XMLSerializer().serializeToString(doc);
// }

// function getFontBlobs(href) {
//   if (href === null) {
//     return;
//   }
//   return fetch(href)
//     .then((res) => res.text())
//     .then((cssText) =>
//       Promise.all(
//         cssText.match(/https:\/\/[^)]+/g).map(
//           (location) =>
//             new Promise((resolve, reject) =>
//               fetch(location)
//                 .then((res) => res.blob())
//                 .then((blob) => {
//                   const reader = new FileReader();
//                   reader.addEventListener("load", ({ target: { result } }) =>
//                     resolve([location, result])
//                   );
//                   reader.readAsDataURL(blob);
//                 })
//                 .catch(reject)
//             )
//         )
//       ).then((replacements) =>
//         replacements.reduce(
//           (acc, replacement) => acc.replace(...replacement),
//           cssText
//         )
//       )
//     )
//     .catch((err) => {
//       console.log(err);
//     });
// }

// onButtonClick();
chrome.runtime.sendMessage({ msg: "capture" }, function (response) {
  console.log(response.imgSrc);
  const temp = document.createElement("img");
  temp.src = response.imgSrc;
  temp.style.position = "absolute";
  temp.style.top = "0";
  temp.style.left = "0";
  temp.style.width = "100%";
  temp.style.height = "100%";
  document.body.appendChild(temp);
});
