import './App.css'
import Card from './components/Card'
import images from './json/images'

function App() {
  
  return (
    <>
    <Card></Card>
    <div className='container'>
    {
      images.map(el => {
        return (
          <div className="card">
            <img src={el.img} className="image" alt=""/>
            <p className="text"> {el.description}</p>
          </div>
        )
      }
      )
    }
    </div>
    </>
  )
  
}

export default App
