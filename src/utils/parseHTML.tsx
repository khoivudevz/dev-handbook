import React from 'react'
import parse from 'html-react-parser'
import DOMpurify from 'dompurify'

const ParseHTML: React.FC<ParseHTMLProps> = ({htmlString, ...rest}) => {
	return <div {...rest}>{parse(DOMpurify.sanitize(htmlString))}</div>
}

export default ParseHTML

type ParseHTMLProps = React.HTMLAttributes<HTMLDivElement> & {
	htmlString: string
}
