import React from "react";

import Link from "next/link";

export default function Header() {
  return (
    <section>
      <div className="NavBarContainer">
        <nav>
          <div>
            <Link href="/">
              <a className="NavBar2">
                <strong>Lista</strong>
              </a>
            </Link>
            <a href="/favorite" className="NavBar2">
              <strong>Favoritos</strong>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
