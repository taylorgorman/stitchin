import Stitches from '../Stitches'
import styles from './index.module.sass'

export default function Character({
  character = '',
  font,
  variant = 'cross'
}) {
  const charWidth = font[character]?.width || font.defaultWidth
  const charHeight = Math.floor(font[character]?.pattern.length / charWidth) || font.defaultHeight
  const lineSpacingPattern = '0'.repeat( charWidth * font.lineSpacing )
  const charPattern = font[character]?.pattern + lineSpacingPattern

  return (
    <div className={ styles.character }>

      {/* Character */}
      <Stitches
        width={ charWidth }
        stitches={ charPattern.split('').map( stitch => ({
          // Currently we're just checking that the stitch value is a number greater than zero
          // This allows our pattern to be as simple as 100100111100
          // Later we can add support for multiple colors like 1002201310201
          variant: !! Number(stitch) ? variant : ''
        }) ) }
      />

      {/* Spacing between characters */}
      { font.letterSpacing && (
        <Stitches
          width={ font.letterSpacing }
          stitches={ [...Array( charHeight + font.lineSpacing ).keys()] }
        />
      ) }

    </div>
  )
}
