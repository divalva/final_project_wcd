import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <article
      className="article-card"
      onClick={() => navigate(`/articles/${article.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && navigate(`/articles/${article.id}`)
      }
    >
      <div className="card-cover">
        <img src={article.cover} alt={article.title} loading="lazy" />
        <span className="card-category">{article.category}</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="card-excerpt">{article.excerpt}</p>
        <div className="card-footer">
          <div className="card-author">
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="author-avatar"
            />
            <div>
              <span className="author-name">{article.author}</span>
              <span className="card-meta">
                {article.date} · {article.readTime} baca
              </span>
            </div>
          </div>
          <div className="card-stats">
            <span className="stat">❤️ {article.likes}</span>
            <span className="stat">💬 {article.comments.length}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
