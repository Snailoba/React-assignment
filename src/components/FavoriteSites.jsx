import "../styles/FavoriteSites.css";
function FavoriteSites() {
  return (
    <section className="containerFav">
      <h2>Favorite Sites</h2>
      <ul>
        <li>
          <a href="https://jojowiki.com/JoJo_Wiki">JoJo wiki</a>
        </li>
        <li>
          <a href="https://www.omnicalculator.com/">Omni calc</a>
        </li>
        <li>
          <a href="https://myanimelist.net/">MAL</a>
        </li>
        <li>
          <a href="https://vndb.org/">Visual Novel Database</a>
        </li>
        <li>
          <a href="https://genshin.honeyhunterworld.com/?lang=EN">
            Genshin database
          </a>
        </li>
      </ul>
    </section>
  );
}

export default FavoriteSites;
