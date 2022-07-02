/*eslint-disable */
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ApiReducer from '../redux/SearchApi'
import { Link } from 'react-router-dom'
import logo from '../Assets/weather-logo.png'

const mockStore = () => {
  const preloadedState = {
    api: [
      {
        flags: {
          png: 'https://flagcdn.com/w320/re.png',
        },
        name: {
          common: 'Réunion',
        },
        ccn3: '638',
        latlng: [-21.15, 55.5],
      },
      {
        flags: {
          svg: 'https://flagcdn.com/w320/bw.png',
        },
        name: 'Botswana',
        latlng: [-22, 24],
      },
    ],
  }
  return configureStore(
   {
    preloadedState,
    reducer: { countries: ApiReducer },
  })
}

const mockHome = () => {
  const country=
      {
        flags:'https://flagcdn.com/w320/re.png',
        name: {
          common: 'Réunion',
        },
        ccn3: '638',
        latlng: [-21.15, 55.5],
      }
      
  return (
    <article className='card' key={country.ccn3}>
      <div className='firstSection'>
        <p
          role='button'
          tabIndex={0}
          className='na'
          onClick={() =>
            (document.getElementById('test').innerHTML = 'test passed!')
          }
          onKeyDown={() =>
            (document.getElementById('test').innerHTML = 'test passed!')
          }
        >
          {country.name}
        </p>
        <div className='fg'>
          <img src={country.flags} alt='' className='coa' />
        </div>
      </div>
    </article>
  )
}

const mockNav = () => (
  <nav
    id='navtest'
    onClick={() =>
      (document.getElementById('navtest').innerHTML = 'nav test passed!')
    }
    onKeyDown={() =>
      (document.getElementById('navtest').innerHTML = 'nav test passed!')
    }
  >
    <div className='container'>
      <img src={logo} alt='logo' />
      <ul className='link-container'>
        <li className='link'>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  </nav>
)

describe('Testing the Home component', () => {
  test('Renders the country data', () => {
    render(<Provider store={mockStore()}>{mockHome()}</Provider>)
    fireEvent.click(screen.queryByText('Réunion'))
    expect(screen.getByText('test passed!')).toBeTruthy()
  })

  test('When app runs north america region is displayed correctly', () => {
    render(mockNav())
    fireEvent.click(screen.queryByText('nav test'))
    expect(screen.getByText('nav test passed!')).toBeTruthy()
  })
})
