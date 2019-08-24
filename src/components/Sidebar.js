import React from 'react'
import PropTypes from 'prop-types'
const Sidebar = ({description}) => (
    <div>
        {description}
    </div>
)

Sidebar.prototype = {
    description: PropTypes.string
}

Sidebar.defaultProps = {
    description: ``
}

export default Sidebar
