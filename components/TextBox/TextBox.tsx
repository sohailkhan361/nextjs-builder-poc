import React from 'react'

const TextBox: React.FC<{
    headline: string,
    description: string
}> = ({ headline, description }) => {
    return (
        <div>
            <h1>{headline}</h1>
            <h5>{description}</h5>
        </div>
    )
}

export default TextBox