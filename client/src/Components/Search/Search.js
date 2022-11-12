import React from 'react'
import "./Search.css"

function Search() {
  return (
    <div className="search_container">
      <section className="search_box">
        <input type="text" placeholder='Game of thrones title theme..' />
      </section>


      
      {/* Browse section --------------------------------------------- */}
      <h2 className="searchHeaders">Browse For</h2>
      <section className="browse_container">
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      <div className="songcards">Slide 1</div>
      </section>

    </div>
  )
}

export default Search