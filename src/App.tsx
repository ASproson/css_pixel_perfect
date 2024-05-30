import "./App.css";
import { Card } from "./components/Card";
import { Introduction } from "./components/Introduction";
import { projects } from "./components/projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex justify-center">
      <div>
        <Introduction />
        <div className="grid sm:grid-cols-2">
          {projects.map((p) => {
            return (
              <div key={p.id}>
                <Card
                  id={p.id}
                  img={p.img}
                  alt={p.alt}
                  title={p.title}
                  description={p.description}
                  link={p.link}
                  github={p.github}
                  deployment={p.deployment}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
