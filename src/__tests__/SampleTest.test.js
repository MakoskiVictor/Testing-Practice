//TEST CON FETCH
/* import React from "react"
import { act, create } from "react-test-renderer"

let component;

describe('<SampleComponent />', () => {
    beforeEache(()=> {
        jest.useFakeTimers()

        window.fetch = jest.fn().mockImpementation(() => Promise.resolve({
            json: () => Promise.resolve([])
        }))

        Window.Storage.prototipe.setItem = jest.fn()

        component = create(<SampleComponent />)
    })
    it('Renderiza correctamente', ()=> {
        expect(component.root).toBeDefined()
        expect(component.root.findByType('h4')).toBeDefined()
    })
    it('Llama a la API con fetch', async ()=> {
        expect(fetch).not.toHaveBeenCalled()

        //CORREMOS LOS TIMERS PORQUE EN ESTE EJEMPLO SE USA UN SETTIMEOUT

        await act( async ()=> {
            await jest.runAllTimers()
        })
        expect(fetch).toHaveBeenCalled()
        expect(fetch).toHaveBeenCalledTimes(2)
        expect(component.root.findByType('p').length).toEqual(0)

        //WINDOWS.FETCH O SOLO FETCH ES LO MISMO EN TESTS

        window.fetch = jest.fn().mockImpementation(()=> Promise.resolve({
            json: () => Promise.resolve([{ id: 1, name: 'Mario' }, { id: 2, name: 'Maria' }])
        }))

        await component.update(<SampleComponent />)

        await act( async ()=> {
            await jest.runAllTimers()
        })

        expect(component.root.findAllByType('p').length).toEqual(2)
        expect(fetch).toHaveBeenCalled()
        expect(fetch).toHaveBeenCalledTimes(2) //ALACTUALIZAR EL MOCKIN SE REESCRIBE LA FN Y POR ESO REINICIA EL NUM DE LLAMADAS
    })
    it('Guarda el resultado en el localStorage', async () => {
        await act( async ()=> {
            await jest.runAllTimers()
        })

        expect(localStorage.setItem).toHaveBeenCalled()
        expect(localStorage.setItem).toHaveBeenCalledWith('users', '[]') // Los args son los que usamos en este ej ficticio
        // El array es string porque usamos el JSON.stringyfile con el localstorage
    })
    // Es buena practica limpiar los mocks después de los tests
    afterAll(() => {
        window.fetch.mockReset()
        window.Storage.prototipe.setItem.mockReset()
    })
}) */