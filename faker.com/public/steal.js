const xhr = new XMLHttpRequest()
xhr.open("GET", "http://user.com:8888/money.json");
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
    console.log(xhr.response);
  }
}
xhr.send()