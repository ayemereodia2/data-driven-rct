import Header from "./components/header";
import Entry from "./components/entry";
import data from "../data";

export default function App() {
  const entries = data.map((item) => {
    return (
      <Entry 
      key = { item.id }
      entry = { item }
    />
    );
  })


  return (
    <>
    <Header />
    <main className="list-entries">
      { entries }
    </main>
    </>
  )
}