import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate= useNavigate ();
  return (
    <>
         <section id="Product">
        <ul>
          
            <li>Laptop</li>
            <img src="https://tse4.mm.bing.net/th?id=OIP.5EZRHGR0LgL2IWcQ511TkQHaF5&pid=Api&P=0&h=180" alt="laptop"/>
            <p>A laptop computer or notebook computer, also known as a laptop or notebook, is a small, portable personal computer (PC). 
            Laptops typically have a clamshell form factor with a flat panel screen (usually 11–17 in or 280–430 mm in diagonal size)
            on the inside of the upper lid and an alphanumeric keyboard and pointing device (such as a trackpad and/or trackpoint) 
            on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a "laptop mode".
            [1][2] Most of the computer's internal hardware is fitted inside the lower lid enclosure under the keyboard, although many laptops have a
             built-in webcam at the top of the screen and some modern ones even feature a touch-screen display. In most cases, unlike tablet computers which run on mobile operating systems, 
            laptops tend to run on desktop operating systems, which were originally developed for desktop computers</p>
            
            <li>Tv</li>
            <img src="https://tse3.mm.bing.net/th?id=OIP.0TLlWm78ccNWVCKjFwmM3QHaE7&pid=Api&P=0&h=180" alt="TV"/>
            <p>Television (TV) is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set,
             or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.
           Television became available in crude experimental forms in the 1920s, but only after several years of further development was the new technology marketed to consumers. 
           After World War II, an improved form of black-and-white television broadcasting became popular in the United Kingdom and the United States, and television sets became commonplace in homes, 
           businesses, and institutions. During the 1950s, television was the primary medium for influencing public opinion.[1] In the mid-1960s, color broadcasting was introduced in the U.S. 
           and most other developed countries.</p>
            <li>Cooler</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP.o7Tn0ve9C_-oE6xxiM0JZAHaHa&pid=Api&P=0&h=180" alt="Cooler"/>
            <p>Air cooling is a method of dissipating heat. It works by expanding the surface area or increasing the flow of air over the object to be cooled, 
            or both. An example of the former is to add cooling fins to the surface of the object, either by making them integral or by attaching them tightly 
            to the object's surface (to ensure efficient heat transfer). In the case of the latter, it is done by using a fan blowing air into or onto the object 
            one wants to cool. The addition of fins to a heat sink increases its total surface area, resulting in greater cooling effectiveness. There are two types
             of cooling pads that can be used for air cooling: one is the honeycomb design and another one is excelsior.</p>
            <li>Mouse</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP._GZZrHyr_Ckc3lPBPyT4vAHaFw&pid=Api&P=0&h=180" alt="Mouse"/>
            <li>Clock</li>
            <img src="https://tse3.mm.bing.net/th?id=OIP.bdQzeIYZOxKwWb9N-rQj4wHaHa&pid=Api&P=0&h=180" alt="Clock"/>
            <p>
            A clock or chronometer is a device that measures and displays time. The clock is one of the oldest human inventions,
             meeting the need to measure intervals of time shorter than the natural units such as the day, the lunar month,
              and the year. Devices operating on several physical processes have been used over the millennia.
            </p>
            <li>Mobile</li>
            <img src="https://tse2.mm.bing.net/th?id=OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj&pid=Api&P=0&h=180" alt="Mobile"/>
            <p>A mobile phone (or cellphone[a]) is a portable telephone that can make and receive calls over a radio frequency 
            link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone).
             The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access 
             to the public switched telephone network (PSTN). Modern mobile telephone services use a cellular network architecture and therefore mobile 
             telephones are called cellphones (or "cell phones") in North America. </p>
            <li>Bag</li>
            <img src="https://tse1.mm.bing.net/th?id=OIP.lXULWv3zhaUIlIvlrxaFOQHaHa&pid=Api&P=0&h=180" alt="bag"/>
            <p>
            A "handbag" is a larger accessory that holds objects beyond currency, such as personal items. American English typically uses the terms purse
             and handbag interchangeably. The term handbag began appearing in the early 1900s. Initially, it was most often used to refer to men's 
             hand-luggage. Women's bags grew larger and more complex during this period, and the term was attached to the accessory.[1]
            </p>
        </ul>
        <button
        onClick={() => {
            navigate("/");
        }}
        >GO BACK</button>
    </section>
    </>
  )
}

export default Product