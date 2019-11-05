let script = document.createElement('script')
script.src = `http://user.com:8888/money.js`;
document.body.appendChild(script)

window.xxx = (data) => {
  console.log(data);
}