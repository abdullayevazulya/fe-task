
const urlParams=new URLSearchParams(location.search)
const productId = urlParams.get("id")
const contentWrapper =document.querySelector(".content-wrapper")

const url = "https://dummyjson.com/products/"


axios(url+productId)
.then((res)=>{
contentWrapper.innerHTML =`<h1>${res.data.title}</h1>
<img src ="${res.data.thumbnail}"alt="${res.data.title}"/>
`
})
.catch((err)=>{
    console.log(err);
})
