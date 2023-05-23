import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import ContentfulImage from './ui/contentfulImage'


const RichText = ({ content }) => {
  return <>{documentToReactComponents(content)}</>
}

export default RichText