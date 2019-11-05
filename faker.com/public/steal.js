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
  const p = document.createElement("p")
  p.textContent = `我通过JSONP获取了${data.name}的余额为${data.account}`
  document.body.appendChild(p)
});
