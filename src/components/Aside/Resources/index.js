import React from "react"
import PropTypes from "prop-types"

export default function Resources(props) {
  const { data } = props

  return (
    <>
      <h4>{data[0].mainTitle}</h4>
      <ul>
        {data.map((obj) => (
          <li key={obj.title}>
            <a href={obj.link}>{obj.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

Resources.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
}
