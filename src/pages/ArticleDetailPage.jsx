import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { articles as initialArticles } from "../data/articles";
import { useAuth } from "../context/AuthContext";
import "./ArticleDetailPage.css";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [articles, setArticles] = useState(initialArticles);
  const [commentText, setCommentText] = useState("");

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="detail-not-found">
        <Navbar />
        <div className="not-found-body">
          <span>🔍</span>
          <h2>Artikel tidak ditemukan</h2>
          <button onClick={() => navigate("/articles")}>
            Kembali ke Daftar Artikel
          </button>
        </div>
      </div>
    );
  }

  const hasLiked = article.likedBy?.includes(currentUser?.id);

  function handleLike() {
    setArticles((prev) =>
      prev.map((a) => {
        if (a.id !== article.id) return a;
        const likedBy = a.likedBy || [];
        if (likedBy.includes(currentUser.id)) {
          return {
            ...a,
            likes: a.likes - 1,
            likedBy: likedBy.filter((uid) => uid !== currentUser.id),
          };
        }
        return {
          ...a,
          likes: a.likes + 1,
          likedBy: [...likedBy, currentUser.id],
        };
      }),
    );
  }

  function handleComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      userId: currentUser.id,
      author: currentUser.name,
      avatar: currentUser.avatar,
      text: commentText.trim(),
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setArticles((prev) =>
      prev.map((a) =>
        a.id === article.id
          ? { ...a, comments: [...a.comments, newComment] }
          : a,
      ),
    );
    setCommentText("");
  }

  // Simple markdown-like rendering
  function renderContent(text) {
    const lines = text.split("\n");
    const elements = [];
    let i = 0;
    let codeBuffer = [];
    let inCode = false;

    while (i < lines.length) {
      const line = lines[i];

      if (line.trim().startsWith("```")) {
        if (!inCode) {
          inCode = true;
          codeBuffer = [];
        } else {
          inCode = false;
          elements.push(
            <pre key={i} className="detail-code">
              <code>{codeBuffer.join("\n")}</code>
            </pre>,
          );
          codeBuffer = [];
        }
        i++;
        continue;
      }

      if (inCode) {
        codeBuffer.push(line);
        i++;
        continue;
      }

      if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <h3 key={i} className="detail-subheading">
            {line.slice(2, -2)}
          </h3>,
        );
      } else if (line.trim() === "") {
        elements.push(<br key={i} />);
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="detail-li">
            {line.slice(2)}
          </li>,
        );
      } else {
        // inline bold **text**
        const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          // inline code `text`
          const codeParts = part.split(/(`[^`]+`)/g).map((cp, k) => {
            if (cp.startsWith("`") && cp.endsWith("`")) {
              return (
                <code key={k} className="inline-code">
                  {cp.slice(1, -1)}
                </code>
              );
            }
            return cp;
          });
          return codeParts;
        });
        elements.push(
          <p key={i} className="detail-paragraph">
            {parts}
          </p>,
        );
      }

      i++;
    }

    return elements;
  }

  return (
    <div className="detail-page">
      <Navbar />

      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate("/articles")}>
          ← Kembali
        </button>

        <article className="detail-article">
          <div className="detail-meta-top">
            <span className="detail-category">{article.category}</span>
            <span className="detail-read-time">⏱ {article.readTime} baca</span>
          </div>

          <h1 className="detail-title">{article.title}</h1>

          <div className="detail-author-row">
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="detail-author-avatar"
            />
            <div>
              <span className="detail-author-name">{article.author}</span>
              <span className="detail-date">{article.date}</span>
            </div>
          </div>

          <img
            src={article.cover}
            alt={article.title}
            className="detail-cover"
          />

          <div className="detail-content">{renderContent(article.content)}</div>

          <div className="detail-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="detail-tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="detail-actions">
            <button
              className={`like-btn ${hasLiked ? "liked" : ""}`}
              onClick={handleLike}
            >
              {hasLiked ? "❤️" : "🤍"} {article.likes} Suka
            </button>
            <span className="comment-count">
              💬 {article.comments.length} Komentar
            </span>
          </div>
        </article>

        {/* Comments */}
        <section className="comments-section">
          <h2 className="comments-title">
            Komentar ({article.comments.length})
          </h2>

          <form className="comment-form" onSubmit={handleComment}>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="comment-avatar"
            />
            <div className="comment-input-group">
              <textarea
                placeholder={`Tulis komentar kamu, ${currentUser.name.split(" ")[0]}...`}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
              />
              <button type="submit" disabled={!commentText.trim()}>
                Kirim
              </button>
            </div>
          </form>

          <div className="comments-list">
            {article.comments.length === 0 && (
              <p className="no-comments">Jadilah yang pertama berkomentar!</p>
            )}
            {[...article.comments].reverse().map((comment) => (
              <div key={comment.id} className="comment-item">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="comment-avatar"
                />
                <div className="comment-body">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
