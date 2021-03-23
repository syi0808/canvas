// const { body } = document;
// const qs = document.querySelector.bind(document);

// const canvas = document.createElement("canvas");
// document.body.appendChild(canvas);
// const ctx = canvas.getContext("2d");

// const tempImg = document.createElement("img");
// tempImg.addEventListener("load", onTempImageLoad);

// const targetImg = document.createElement("img");
// body.appendChild(targetImg);

// qs("#asd").addEventListener("click", onButtonClick);

// function onButtonClick() {
//   const element = qs("div");
//   const { offsetWidth, offsetHeight } = element;
//   Promise.all([
//     getFontBlobs(qs("[data-font]").href),
//     getStyleInlined(qs("style")),
//     getXHTMLInlined(element),
//   ]).then(([font, style, html]) => {
//     const svgString = getSVGString(
//       offsetWidth,
//       offsetHeight,
//       `<style>${font}${style}</style>`,
//       html
//     );
//     /*const iframe = document.createElement('iframe')
//       body.appendChild(iframe)
//       const {contentWindow:{document:doc}} = iframe
//       doc.open()
//       doc.write(svgString)
//       doc.close()*/
//     tempImg.src = "data:image/svg+xml," + encodeURIComponent(svgString);
//     canvas.width = offsetWidth;
//     canvas.height = offsetHeight;
//     //body.appendChild(tempImg)
//   });
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
//       return loadImageBase64(uri).then((img) => [s, s.replace(uri, img)]);
//     })
//   ).then((replacements) =>
//     replacements.reduce(
//       (acc, replacement) => acc.replace(...replacement),
//       style
//     )
//   );
// }

// function getXHTMLInlined(element) {
//   return getOuterHTMLInlined(element).then(htmlToXHTML);
// }

// function getOuterHTMLInlined(element) {
//   const clone = element.cloneNode(true);
//   const images = clone.querySelectorAll("img");
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
//   return new XMLSerializer().serializeToString(doc);
// }

// function getFontBlobs(href) {
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
//     );
// }
html2canvas(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});
