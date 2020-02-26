import React from 'react';
// import { render, fireEvent } from "@testing-library/react";
import {render} from "react-dom";
import WomensCard from './WomensCard';
import {act} from "react-dom/test-utils"

test('renders name, country, searches', ()=>{
    const container = document.createElement('div');
    const fakeUser = {
        name: "Juana",
        country: "India",
        searches: "150",
    }
    document.body.appendChild(container);
    act(() => {
        render(<WomensCard name={fakeUser.name} country={fakeUser.country} searches={fakeUser.searches}/>, container);
    });
  
    expect(container.querySelector("h2").textContent).toBe(fakeUser.name);
    expect(container.querySelector("h4").textContent).toBe(fakeUser.country);
    expect(container.querySelector("p").textContent).toContain(fakeUser.searches);
    
});
// When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction
// with a user interface. React provides a helper called act() that makes sure all updates related to these “units” have 
// been processed and applied to the DOM before you make any assertions: