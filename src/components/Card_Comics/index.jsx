import "./card_comics.scss";

export default function Index({ comics }) {
  return (
    <div
      className="card_comics"
      style={{
        backgroundImage: `url(${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="block-description">
        <h2>{comics.title}</h2>
        {comics.description && (
          <p className="description">{comics.description}</p>
        )}
      </div>
    </div>
  );
}
