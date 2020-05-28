import React from 'react';
import ReactDOM from 'react-dom';
import BackButton from './BackButton';
import { getByTestId } from '@testing-library/dom';
import {render, fireEvent} from '@testing-library/react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

it('item list renders without crashing', () => {
    let path = "home/cs394";
    let setPath = jest.fn();
    
    const { getByTestId } = render(<DndProvider backend={Backend}>     
          <BackButton display="inline" state={ {path, setPath} } marginBottom="10px"/>
    </DndProvider>); 

    const myGrid = getByTestId("backButton");
    expect(myGrid).toBeInTheDocument();
});