import { Navbar ,Welcome,Footer,Loder,Services,Transaction } from "./compenents"

const App=()=> {
  

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/> 
       
    </div>
  )
}

export default App;
