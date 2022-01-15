import styles from './index.module.sass'

export default function Stitches({
  stitches,
  width = 1
}) {
  return !! stitches && (
    <div className={ styles.stitches } style={{ width: `${width}em` }}>
      { stitches.map( stitch => (
        <Stitch { ...stitch } />
      ) ) }
    </div>
  )
}

export function Stitch({
  variant = '' // cross, square - see styles for reference
}) {
  return (
    <div className={`${styles.stitch} ${styles[variant]}`} />
  )
}
