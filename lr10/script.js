var i = -1
let imagesUrls = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.png","./images/5.jpg","./images/6.png"]
document.getElementById('imageButton').addEventListener("click", setRandomImage)
document.getElementById('rng').addEventListener("change",()=>{document.getElementById("txt").value = document.getElementById("rng").value})
document.getElementById('slideshowBtn').addEventListener("click", ()=>{
        setInterval(()=>{
            setRandomImage();
        },parseFloat(getTime()));
    })
function setRandomImage()
{
    let randomIndex = (imagesUrls.length-1) * Math.random();
    if (i!=randomIndex)
    {
        document.getElementById('controlImage').setAttribute('src',imagesUrls[randomIndex.toFixed()])
        i = randomIndex
    }
}
function getTime()
{
    console.log(document.getElementById("rng").value)
    return document.getElementById("rng").value
}
