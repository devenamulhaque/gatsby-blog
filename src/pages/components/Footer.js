import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { css } from '@emotion/core'
const Footer = () => {
    return (
        <div
            css={css`
                background-color: red;
            `}
        >
            <Container>
                <Row>
                    <Col>
                        <p className="text-center text-white mb-0">
                            @2019. All rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
