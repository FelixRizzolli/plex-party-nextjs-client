import {SignInButton, SignOutButton } from "@/components/buttons.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main-card">
        <div>
          <div>
            <h2>
              <span className="text-primary underline">Plex</span>Party
            </h2>
            <p>
              The administrator can set up a server. This provides a GraphQL API, which delivers the movies and series available in the own Plex library. Thereby information from TVDB is added. In addition, the administrator receives a task if a new season or a new episode is available.
            </p>
            <p>
              The Plex user can view the content of the Plex Libary and rate the quality of the content. He can also request new movies/series.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
