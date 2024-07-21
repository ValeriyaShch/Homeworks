import {mount} from "cypress/react18";
import App from "../../src/App.jsx";
import '../../src/index.css'

describe('App.cy.jsx', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('Перевірка заголовку', () => {
    cy.get('h1').should(($h1) => {
      expect($h1).to.have.text('ToDoList')
    })
  })

  it('Введення тексту і цифр', () => {
    cy.get('.form__input').type('123abc')
    cy.get('.form__input').should('have.value', '123abc')
  })

  it('Введення тексту і цифр менше 5 символів', () => {
    cy.get('.form__input').type('12bc')
    cy.get('.form__btn').click()

    cy.get('.error').should('have.text', 'Повинно бути не менше 5 символів')
  })

  it('Клік без тексту', () => {
    cy.get('.form__btn').click()
    // todo_list
    cy.get('.error').should('have.text', 'Це обов\'язкове поле')
  })

  it('Додавання елементів в список', () => {
    cy.get('.form__input').type('12bca34')
    cy.get('.form__btn').click()
    cy.get('.todo-item').should('have.length', 1)
  })

  it('Очистка елементів', () => {
    cy.get('.form__input').type('12bca34')
    cy.get('.form__btn').click()
    cy.get('.clear-btn').click()
    cy.get('.todo-item').should('have.length', 0)
  })
})

