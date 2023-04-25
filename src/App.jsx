// App component for Travel Journal, puts together all the entries and the Navbar
// A central part of this project is being able to utilize props and to generate
// custom components using existing data.
import Navbar from "./components/Navbar.jsx"
import Entry from "./components/Entry.jsx"
import data from "./data/data.jsx"

function App() {
  const entries = data.map((item) => <Entry key={item.id} item={item} />)

  return (
    <>
      <Navbar />
      <main className="container">
        {entries}
      </main>
    </>
  )
}

export default App

