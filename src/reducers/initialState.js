const images = Array.from(Array(5)).map(
    (item, index) => require(`../images/gallery/${index}.png`)
)

export default {
    gallery: {
        images,
        currentImageIndex: 0,
        showingBigPicture: false
    }
}