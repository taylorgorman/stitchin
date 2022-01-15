import { useState } from 'react'
import Head from 'next/head'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import styles from './index.module.sass'
import stitchSansSmall from '../fonts/stitchSansSmall'
import lobsterSmall from '../fonts/lobsterSmall'
import Stitches from '../components/Stitches'
import Character from '../components/Character'

export default function Home() {

  const [bodyCopy, setBodyCopy] = useState('')
  const [stitchStyle, setStitchStyle] = useState('cross')
  const [font, setFont] = useState('stitchSansSmall')

  return ( <>

    <Head>
      <title>Stitchin&apos;</title>
      <meta name="description" content="Let's see if we can make this work.." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Row>
      <Col md={ 4 } className={ styles.inputCol }>
        <h4>Input</h4>
        <hr />

        <Form>
        <Form.Group controlId="body-copy">
            <Form.Label>Body Copy</Form.Label>
            <Form.Control
              as="textarea"
              rows={ 3 }
              value={ bodyCopy }
              onChange={ ({ target }) => setBodyCopy( target.value ) }
            />
          </Form.Group>
          <Form.Group controlId="stitch-style">
            <Form.Label>Stitch Style</Form.Label>
            <Form.Check 
              type="radio"
              label="Cross"
              value="cross"
              checked={ stitchStyle === 'cross' }
            />
            <Form.Check 
              type="radio"
              label="Square"
              value="square"
            />
          </Form.Group>
          <Form.Group controlId="font">
            <Form.Label>Font</Form.Label>
            <Form.Select>
              <option value="stitchSansSmall">Lobster, Small</option>
              <option value="stitchSansSmall">Stitch Sans, Small</option>
            </Form.Select>
          </Form.Group>
        </Form>

      </Col>
      <Col className={ styles.outputCol }>
        <h4>Output</h4>
        <hr />

        <div className={ styles.output }>
          { bodyCopy.split('').map( ( character ) => (
          <>
            <Character character={ character } font={ stitchSansSmall } />
          </>
          ) ) }
        </div>
        
      </Col>
    </Row>

  </> )
}

