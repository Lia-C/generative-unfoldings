// const frameKeyword = 'frame';

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('frame');


staticFrame = (myParam === "")
console.log(myParam);
console.log(staticFrame);