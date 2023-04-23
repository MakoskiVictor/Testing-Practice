import React from 'react'
import Gallery from '../components/Gallery.js'
import { create, act } from 'react-test-renderer'
import Image from '../components/Image.js'
import NoImages from '../components/NoImages.js'

let component
const props = {
    data: []
}

describe('<Gallery />', ()=> {
    beforeEach(()=> {
        component = create(<Gallery {...props}/>)
    })
    it('Renderiza correctamente', () => {
        expect(component).toBeDefined()
        expect(component.root.findByType('div')).toBeDefined()
        expect(component.root.findByType('ul')).toBeDefined()
    })
    it('Muestra NoImages si la data está vacía', ()=> {
        expect(component.root.findByType(NoImages)).toBeDefined()
    })
    it('Renderiza las imagenes si la data existe o cambia', ()=> {
        const data = [
            { farm: 'farmTest01', server: 'serverTest01', id: 'testId01', secret: '123211asdsa', title: 'titleTest01' },
            { farm: 'farmTest02', server: 'serverTest02', id: 'testId02', secret: '123211asa', title: 'titleTest02' },
            { farm: 'farmTest03', server: 'serverTest03', id: 'testId03', secret: '1211asdsa', title: 'titleTest03' },
            { farm: 'farmTest04', server: 'serverTest04', id: 'testId04', secret: '12321sdsa', title: 'titleTest04' }
        ]

        // Cambiando la data inicial por la nueva definida en este test
        component.update(<Gallery data={data} />)

        expect(component.root.findAllByType(NoImages).length).toEqual(0)
        expect(component.root.findAllByType(Image).length).toEqual(data.length)
        expect(component.root.findAllByType(Image)[0].props.alt).toEqual(data[0].title)
    })
})