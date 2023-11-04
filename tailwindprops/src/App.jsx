import './App.css'
import Card from './components/Card'

function App() {

  const mydetails = {
    name : 'myname',
    age : 22
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl font-color-black p-5 mb-5'>Using Tailwind and props</h1>
      <Card username="myname" details={mydetails} />
    </>
  )
}

export default App
