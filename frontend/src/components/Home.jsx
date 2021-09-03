import React, { useState, useEffect } from 'react'
import "./Home.css"

// https://codepen.io/mirandalwashburn/pen/MWawdxr
export default function Home(){
    return(
        <div className="home-body">
            <main className="main">
                <div className="d-flex justify-content-center container text-center">
                    <h1 className="title">Picted</h1>
                    <h4 className="subtitle">Picture Education Article</h4>
                </div>
            </main>
            <div className="container-fluid article-prev" style={{backgroundColor: "#F123F2"}}>
                <h2 className="text-center pt-4 article-text">Article</h2>
                <section className="card-sm__container container pb-4">

                    <section className="card-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1584962356612-f7092400e895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')"}}>
                        <p className="card__text-sm">Tanifa - Spain</p>
                        <h1 className="card__text-lg">Los Lances Beach</h1>
                    </section>

                    <section className="card-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1489823480956-0204142cfebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')", backgroundPosition: "center right"}}>
                        <p className="card__text-sm">Japan Alps</p>
                        <h1 className="card__text-lg">Nagano Prefecture</h1>
                    </section>

                    <section className="card-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')"}}>
                        <p className="card__text-sm">Sierra Nevada - USA</p>
                        <h1 className="card__text-lg">Yosemite National  </h1>
                    </section>

                    <section className="card-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')"}}>
                        <p className="card__text-sm">Cappadocia - Turkey</p>
                        <h1 className="card__text-lg">Goreme &nbsp; Valley</h1>
                    </section>
                </section>
            </div>
        </div>
    )
}