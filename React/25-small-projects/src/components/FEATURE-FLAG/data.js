const dummyapi = {
  showaccordian: true,
  showimageslider: false,
  showgithub: true,
  showqrcode: true,
  showloadmorebutton: false,
};

function featurecall() {
  return new Promise((resolve, reject) => {
    if (dummyapi) setTimeout(resolve(dummyapi), 500);
    else reject("Error Occured.");
  });
}

export default featurecall;
