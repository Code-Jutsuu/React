import Cards from "./Cards.jsx"
import Student from "./Student.jsx"

function App() {
 

  return (
    <>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <hr />

      <Student name="Spongebob" Student={false} bio="A clumsy yellow sea sponge who lives in a furnished pineapple house with his pet snail Gary"
              img= "./src/assets/SpongeBob.webp"/>

      <Student name="Patrick" Student={true} bio="SpongeBob's best friend, a pink starfish who wears green flowered swim trunks ...Patrick Star."
              img= "./src/assets/Patrick.webp"/>

      <Student name="Squidward" Student={false} bio="SpongeBob's next-door neighbor and coworker at the Krusty Krab, who lives in an Easter Island Head."
              img= "./src/assets/Squidward.webp"/>

      <Student name="Sandy" Student={true} bio="A squirrel from Texas who wears a diving suit and lives in an air-filled glass Treedome to breathe underwater."
              img= "./src/assets/Sandy.webp"/>

      
    </>
  )
}

export default App
