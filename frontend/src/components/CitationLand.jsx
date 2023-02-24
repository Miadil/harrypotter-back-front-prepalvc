import harryarticle from "../assets/harryarticle.png"
import "./CitationLand.css"

const CitationLand = () => {
  return (
    <section id="landArticle">
      <article className="landArticleglob">
        <div className="landArticleText">
          <span className="landArticlePSpanTop">
            “Il n’y a rien à craindre d’un cadavre, tout comme il n’y a rien à
            craindre du noir.
          </span>
          <span className="landArticlePSpanBot">
            C’est l’inconnu qui nous fait peur quand nous contemplons la mort ou
            l’obscurité, rien d’autre. ”
          </span>
          <h1>Harry Potter</h1>
        </div>
        <img
          className="landArticleimg"
          src={harryarticle}
          alt="illustration harry potter"
        />
      </article>
    </section>
  )
}
export default CitationLand
