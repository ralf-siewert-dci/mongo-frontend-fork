import "./HomePage.css";

export default function HomePage() {
  return (
    <main>
      <h2>Intro</h2>
      <p>
        Gruppen-Zusammenarbeit mit 2er Teams (Backend: Ralf / Frontend:
        Christian). Umsetzung der CRUD (Create, Read, Update, Delete) Methoden
        am Beispiel der User-Verwaltung.
      </p>

      <h2>Frontend Routen</h2>
      <ul>
        <li>
          <strong>/</strong> &mdash; Homepage (diese Seite hier)
        </li>
        <li>
          <strong>/users</strong> &mdash; alle User anzeigen
        </li>
        <li>
          <strong>/users/new</strong> &mdash; neuen User hinzufügen
        </li>
        <li>
          <strong>/users/edit/:id</strong> &mdash; bestehenden User editieren
        </li>
      </ul>

      <h2>Zusätzliche Frontend-Funktionen</h2>
      <ul>
        <li>
          <strong>per Button</strong> &mdash; bestehenden User löschen
        </li>
      </ul>

      <h2>Backend-Routen</h2>
      <ul>
        <li>
          <strong>GET: /users/</strong> &mdash; Daten von allen Usern lesen
        </li>
        <li>
          <strong>GET: /users/:id</strong> &mdash; Daten von einem User (mit id)
          lesen
        </li>
        <li>
          <strong>POST: /users</strong> &mdash; neuen User hinzufügen
        </li>
        <li>
          <strong>PATCH: /users/:id</strong> &mdash; bestehenden User editieren
        </li>
        <li>
          <strong>DELETE: /users/:id</strong> &mdash; bestehenden User löschen
        </li>
      </ul>
    </main>
  );
}
