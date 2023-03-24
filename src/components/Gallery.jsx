import "../styles/Gallery.css"
function Gallery() {
    return (
      <section className = "container">
        <h2>Gallery</h2>
        <ul>
            <li><img width={200} src="assets/shrimp.png" alt="bowling shrimp"/></li>
            <li><img width={200} src="assets/shrimp.png" alt="bowling shrimp"/></li>
            <li><img width={200} src="assets/shrimp.png" alt="bowling shrimp"/></li>
        </ul>
      </section>
    )
}
  
export default Gallery