import React from 'react'
import Form from '../components/Form.js'
import { create, act } from 'react-test-renderer'

let component
const props = {
  history: {},
  handleSubmit: () => { } //TODO
}

describe('<Form />', () => {
  // Iniciamos antes de cada instancia de prueba (montamos el componente)
  beforeEach(() => {
    component = create(<Form {...props} />)
  })
  it('Renderiza correctamente', () => {
    // Esperamos que el componenteeste definido
    expect(component).toBeDefined()
    // Esperamos que esté trayendo un resultado (los resultados traen un .type)
    expect(component.toJSON().type).toEqual('form')
    // .root es para acceder a la instancia de lcomponent y poder acceder a los selectores
    // esperamos que el boton, input y svg estén definidos (existan)
    expect(component.root.findByType('input')).toBeDefined()
    expect(component.root.findByType('button')).toBeDefined()
    expect(component.root.findByType('svg')).toBeDefined()
  })
  it('El boton debe renderizar si el input tiene un valor no vacío', ()=> {
    const form = component.root.findByType('form')
    const input = form.findByType('input')
    const button = form.findByType('button')

    expect(button.props.disabled).toBeTruthy()
    //El className es diferente si está habilitado
    expect(button.props.className).toEqual('search-button null')
    // console.log(input.props)
    // Testeando el onChange
    // CUANDO EALIZAMOS UN CAMBIO DENTRO DEL COMPONENTE EN LOS TESTS CON JEST DEBEMOS USAR ACT

    act(() => {
        input.props.onChange({ target: { value: 'aves' } })
    })
    //Después de poner un input el boton debe estar habilitado
    expect(button.props.disabled).toBeFalsy()
    expect(button.props.className).toEqual('search-button active')
  })
  it('Se debe llamar al onSubmit sin problemas', () => {
    const form = component.root.findByType('form')

    form.props.onSubmit()
    //TODO
  })
})
