let $money = document.createElement("p");
const xhr = new XMLHttpRequest();
xhr.open("GET", "money.json");
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
    const { name, account } = JSON.parse(xhr.response);
    $money.textContent = `用户名: ${name}, 您的余额为: ${account}`
    document.body.appendChild($money);
  }
};
xhr.send();
