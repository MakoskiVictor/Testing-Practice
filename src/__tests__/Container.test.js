//MOCKING DE UN MODULO que usa un CONTEXT
import React from "react"
import { act, create } from "react-test-renderer"
import Container from '../components/Container.js'
//EN CASO DE USAR PROVIDERS
import PhotoContextProvider from "../context/PhotoContext.js";
//------------
import Gallery from "../components/Gallery.js";
import axios from 'axios'

let component;

describe('<Container />', () => {
    beforeEach( async () => {
        await act( async () => {
            component = await create(
                <PhotoContextProvider>
                    <Container searchTerm='' />
                </PhotoContextProvider>
            )
        })
    })
    it('Renderiza correctamente', () => {
        expect(component.root).toBeDefined()
        expect(component.root.findByType(Container)).toBeDefined()
        expect(component.root.findAllByType(Gallery).length).toEqual(1)
    })
    //LLAMADA A API
    it('Llama a la API si es necesaria o si cambia e ltexto', async () => {
        const customData = {
            data: {
                photos: {
                    photo: [{ farm: 'farmTest01', server: 'serverTest01', id: 'testId01', secret: '123211asdsa', title: 'titleTest01' }]
                }
            }
        }
        axios.get.mockImplementation(()=> Promise.resolve(customData))
        await act( async () => {
            await component.update(
                <PhotoContextProvider>
                    <Container searchTerm='text'/>
                </PhotoContextProvider>
            )
        })

        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledTimes(3)
        expect(axios.post).not.toHaveBeenCalled()
        expect(axios.put).not.toHaveBeenCalled()

        expect(component.root.findByType(Gallery).props.data).toEqual(customData.data.photos.photo)
    })
})