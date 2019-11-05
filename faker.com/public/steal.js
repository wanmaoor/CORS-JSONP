function JSONP(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    const random = "JSONP" + Math.random();
    window[random] = data => {
      resolve(data);
    };
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    script.src = `${url}?callback=${random}`;
    document.body.appendChild(script);
  });
}

JSONP("http://user.com:8888/money").then(data => {
  console.log(data);
});
