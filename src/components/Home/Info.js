import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              consectetur at et iure rem nobis nisi explicabo ex aspernatur, cum
              cupiditate impedit, perferendis possimus reiciendis pariatur
              corporis sapiente nesciunt similique deleniti? Hic beatae
              dignissimos deleniti commodi aliquam quam odit dolore perferendis
              nihil et nobis dicta culpa repellendus reiciendis dolor, officia
              magni vero corrupti numquam.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
