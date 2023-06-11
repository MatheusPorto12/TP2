fetch('https://diwserver.vps.webdock.cloud/products')
.then((Response)=> Response.json())
.then((response)=> console.log(response))




fetch('https://diwserver.vps.webdock.cloud/products')
  .then(response => response.json())
  .then(console.log(data))
    