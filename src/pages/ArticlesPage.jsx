import { useState } from "react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";
import "./ArticlesPage.css";

const ALL_CATEGORIES = ["Semua", ...new Set(articles.map((a) => a.category))];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = articles.filter((a) => {
    const matchCategory =
      activeCategory === "Semua" || a.category === activeCategory;
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="articles-page">
      <Navbar />

      <div className="articles-hero">
        <h1>Jelajahi Artikel</h1>
        <p>
          Temukan tulisan menarik seputar teknologi, desain, dan produktivitas
        </p>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Cari artikel, topik, atau penulis..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="articles-body">
        <div className="category-tabs">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <span>📭</span>
            <p>Tidak ada artikel yang cocok dengan pencarian kamu.</p>
          </div>
        ) : (
          <>
            <p className="result-count">{filtered.length} artikel ditemukan</p>
            <div className="articles-grid">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
