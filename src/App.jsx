import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import useLocationApi from './hooks/useLocationApi'
import CardLocation from './components/CardLocation'
import Loading from './components/Loading'
import Form from './components/Form'
import CardLocationHeader from './components/CardLocationHeader'

function App() {
  const { locations, isLoading } = useLocationApi()
  const [searchLocation, setsearchLocation] = useState()
  const [isRandom, setisRandom] = useState(true)

  useEffect(() => {
    if (searchLocation) {
      setisRandom(false)
    }
  }, [searchLocation])
  console.log(locations)





  return (
    <article className="App">
      {
        isLoading ?
          <Loading />
          :
          <div>
            {isRandom ?
              <div className='appCount'>
                <Form locations={locations} setsearchLocation={setsearchLocation} />
                <div className='appCont'>
                  <CardLocationHeader locations={locations[2]} />
                  <div className='contCards'>
                    {locations?.[2].residents.map(resident => (
                      <CardLocation
                        resident={resident}
                        key={resident} />
                    ))}
                  </div>
                </div>
              </div>
              :
              <div>
                <Form locations={locations} setsearchLocation={setsearchLocation} />
                <div className='appCont'>
                  <CardLocationHeader locations={locations[searchLocation]} />
                  <div className='contCards'>
                    {locations?.[searchLocation].residents.map(resident => (
                      <CardLocation
                        resident={resident}
                        key={resident} />
                    ))}
                  </div>
                </div>
              </div>
            }
          </div>

      }

    </article>
  )
}

export default App
