import React, { useState } from 'react'
import './App.css'

function App () {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')
  const [decimal, setDecimal] = useState(false)

  const handleButtonClick = value => {
    if (value === 'AC') {
      setDisplay('0')
      setExpression('')
      setDecimal(false)
    } else if (value === '=') {
      try {
        const result = eval(expression)
        setDisplay(result.toString())
        setExpression(result.toString())
        setDecimal(true)
      } catch (error) {
        setDisplay('Error')
        setExpression('')
        setDecimal(false)
      }
    } else {
      const operatorPattern = /[+\-*/]/

      if (value !== '-' && operatorPattern.test(value)) {
        const lastChar = expression.charAt(expression.length - 1)
        const secondLastChar = expression.charAt(expression.length - 2)

        if (operatorPattern.test(lastChar)) {
          setExpression(
            lastChar === '-' && operatorPattern.test(secondLastChar)
              ? `${expression.slice(0, -2)}${value}`
              : `${expression.slice(0, -1)}${value}`
          )
          setDisplay(
            lastChar === '-' && operatorPattern.test(secondLastChar)
              ? `${display.slice(0, -2)}${value}`
              : `${display.slice(0, -1)}${value}`
          )
          return
        }
      }

      if (value === '.') {
        const parts = expression.split(operatorPattern)
        const lastNumber = parts[parts.length - 1]
        if (lastNumber.includes('.')) {
          return
        }
        setExpression(expression + value)
        setDisplay(display + value)
      }

      if (display === '0' && value === '0') {
        return
      } else if (display === '0' && value !== '.') {
        setDisplay(value)
        setExpression(value)
      } else if (value === '.' && !decimal) {
        setDisplay(display + value)
        setExpression(expression + value)
        setDecimal(true)
      } else if (value === '.' && display.includes('.')) {
        return
      } else {
        setDisplay(display + value)
        setExpression(expression + value)
      }
    }
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <div id='display' className='row'>
          {display}
        </div>
        <div
          id='clear'
          className='row'
          onClick={() => handleButtonClick('AC')}
          tabIndex='0'
          role='button'
          aria-label='Clear'
        >
          AC
        </div>
        <div
          id='seven'
          className='row'
          onClick={() => handleButtonClick('7')}
          tabIndex='0'
          role='button'
          aria-label='7'
        >
          7
        </div>
        <div
          id='eight'
          className='row'
          onClick={() => handleButtonClick('8')}
          tabIndex='0'
          role='button'
          aria-label='8'
        >
          8
        </div>
        <div
          id='nine'
          className='row'
          onClick={() => handleButtonClick('9')}
          tabIndex='0'
          role='button'
          aria-label='9'
        >
          9
        </div>
        <div
          id='multiply'
          className='row'
          onClick={() => handleButtonClick('*')}
          tabIndex='0'
          role='button'
          aria-label='Multiply'
        >
          *
        </div>
        <div
          id='four'
          className='row'
          onClick={() => handleButtonClick('4')}
          tabIndex='0'
          role='button'
          aria-label='4'
        >
          4
        </div>
        <div
          id='five'
          className='row'
          onClick={() => handleButtonClick('5')}
          tabIndex='0'
          role='button'
          aria-label='5'
        >
          5
        </div>
        <div
          id='six'
          className='row'
          onClick={() => handleButtonClick('6')}
          tabIndex='0'
          role='button'
          aria-label='6'
        >
          6
        </div>
        <div
          id='divide'
          className='row'
          onClick={() => handleButtonClick('/')}
          tabIndex='0'
          role='button'
          aria-label='Divide'
        >
          /
        </div>
        <div
          id='one'
          className='row'
          onClick={() => handleButtonClick('1')}
          tabIndex='0'
          role='button'
          aria-label='1'
        >
          1
        </div>
        <div
          id='two'
          className='row'
          onClick={() => handleButtonClick('2')}
          tabIndex='0'
          role='button'
          aria-label='2'
        >
          2
        </div>
        <div
          id='three'
          className='row'
          onClick={() => handleButtonClick('3')}
          tabIndex='0'
          role='button'
          aria-label='3'
        >
          3
        </div>
        <div
          id='add'
          className='row'
          onClick={() => handleButtonClick('+')}
          tabIndex='0'
          role='button'
          aria-label='Add'
        >
          +
        </div>
        <div
          id='zero'
          className='row'
          onClick={() => handleButtonClick('0')}
          tabIndex='0'
          role='button'
          aria-label='0'
        >
          0
        </div>
        <div
          id='decimal'
          className='row'
          onClick={() => handleButtonClick('.')}
          tabIndex='0'
          role='button'
          aria-label='Decimal Point'
        >
          .
        </div>
        <div
          id='equals'
          className='row'
          onClick={() => handleButtonClick('=')}
          tabIndex='0'
          role='button'
          aria-label='Equals'
        >
          =
        </div>
        <div
          id='subtract'
          className='row'
          onClick={() => handleButtonClick('-')}
          tabIndex='0'
          role='button'
          aria-label='Subtract'
        >
          -
        </div>
        <div className='footer'>Created by mikedev23</div>
      </div>
    </div>
  )
}

export default App
