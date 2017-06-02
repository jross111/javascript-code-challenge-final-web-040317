class Image{
constructor(imageURL, caption){
  this.imageURL = imageURL
  this.caption = caption
}
  render(){
    return `
      <div>
      <img src="${this.imageURL}">
      <h4>${this.caption}</h4>
      </div>
      `
  }
}
