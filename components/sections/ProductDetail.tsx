"use client";

import "../../styles/product-detail.css";
import { Product } from "@/data/products";

const ProductDetail = ({ data }: { data: Product }) => {
  return (
  <div >
     <div style={{backgroundColor:'white', borderRadius:'15px'}} className="container">
     <div className="pd-wrapper">

      {/* Description */}
      <p className="pd-description">{data.description}</p>

      {/* Specs Table */}
      <ul className="pd-specs-list">
        {data.specs.map((s, i) => (
          <li key={i}>
            <span className="pd-spec-label">{s.label}</span>
            <span className="pd-spec-value">{s.value}</span>
          </li>
        ))}
      </ul>

      <div className="pd-section-divider" />

      {/* Categories & Varieties */}
      {data.categories.map((cat, ci) => (
        <div className="pd-category" key={ci}>
          <h3 className="pd-category-name">{cat.name}</h3>
          {cat.description && (
            <p className="pd-category-desc">{cat.description}</p>
          )}
          <div className="pd-variety-grid">
            {cat.varieties.map((v, vi) => (
              <div className="pd-variety-card" key={vi}>
                <div className="pd-variety-img-wrap">
                  {v.image ? (
                    <img src={v.image} alt={v.name} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "var(--color-background-subheading)",
                      }}
                    />
                  )}
                </div>
                <div className="pd-variety-name">{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
   </div>
  </div>
  );
};

export default ProductDetail;