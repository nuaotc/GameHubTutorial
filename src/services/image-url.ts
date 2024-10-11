//url.indexOf('media/') searches for the first occurrence of the string 'media/' in the url.
//It returns the index (a number) representing the position where 'media/' starts in the url string.
//If the target substring is not found, it returns -1.
//By adding target.length to the result of url.indexOf(target), you're calculating the position just after the 'media/' substring.

//url.slice(0, index) gets the part of the URL up to and including 'media/'
//url.slice(index) grabs the rest of the URL starting from where 'media/' ends

//optimise image size, for diplaying card images no need a big size image which will cause slow viewing for customer with slower network
//cropping the image to a unified size also helps align the images horizontally and vertically which make the page look clean and tidy and organized in a grid layout

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
