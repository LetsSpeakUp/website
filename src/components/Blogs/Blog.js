import './Blogs.css'
import React from 'react'
import { motion } from 'framer-motion'


export default function blogs() {
    return (
        <div>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="text-bold">Our Blogs</h1>
                        <p class="lead text-white">Check out blogs by team LSU to help level up your game and stand out from others! </p>
                    </div>
                </div>
            </section>

            <div class="album py-5">
                <motion.div 
                 initial ={{opacity: 0, x:-300}}
                 transition ={{duration: 1}}
                 whileInView={{ opacity: 1, x:0 }}
                class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm bg-dark text-white">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">This is a blog descripton.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" href="#" class="btn btn-md btn-outline-warning">View</button>
                                           
                                        </div>
                                        <small class="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm bg-dark text-white">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">This is a blog descripton.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-md btn-outline-warning">View</button>
                                        </div>
                                        <small class="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm bg-dark text-white">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">This is a blog descripton.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-md btn-outline-warning">View</button>
                                        
                                        </div>
                                        <small class="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}
