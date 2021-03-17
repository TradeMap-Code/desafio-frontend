import React from "react";

export default function FavoriteSelect({ stock }) {
  return (
    <section>
      <div>
        <p className="Label" className="CardFavorite">
          Favorito:
          <input type="checkbox" className="Checkbox" />
        </p>
      </div>
    </section>
  );
}
