import React from 'react'
import "./styles.scss"
import { Modal, Button } from 'react-bootstrap'
import WashHand from 'app/assets/landing/wash-hand.png'
import SocialDistance from 'app/assets/landing/social-distance.png'
import Mask from 'app/assets/landing/mask.png'
import HandShake from 'app/assets/landing/hand-shake.png'
import HandSanitizer from 'app/assets/landing/hand-sanitizer.png'
import Disinfectant from 'app/assets/landing/disinfectant.png'

export default function ModalWelcome({ show, title, fullscreen, guest, onModalClosed}) {
    return (
        <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={onModalClosed}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="section-invitation">
                    <div className="section-dear">
                        Dear <span className="guest">{guest ? guest : 'You'}</span>
                    </div>
                    <div className="section-desc">
                        Request the honour of your presence <br />
                        at our special moment:<br />
                    </div>
                    <div className="section-bride">
                        Siska Dwi Putri <br />
                        & <br />
                        Agesta Budy Saputra <br />
                    </div>

                    <div className="section-health-protocol">
                        <span className="section-health-protocol--title">Health Protocol (COVID-19)</span>
                        <div className="section-health-protocol--gallery">
                            <div className="health-protocol--item">
                                <img src={WashHand} alt="wash-hand" />
                                <span className="desc"> Wash Hand </span>
                            </div>
                            <div className="health-protocol--item">
                                <img src={SocialDistance} alt="social-distance" />
                                <span className="desc"> Social Distance </span>
                            </div>
                            <div className="health-protocol--item">
                                <img src={Mask} alt="mask" />
                                <span className="desc"> Mask </span>
                            </div>
                            <div className="health-protocol--item">
                                <img src={HandShake} alt="hand-shake" />
                                <span className="desc"> Hand Shake </span>
                            </div>
                            <div className="health-protocol--item">
                                <img src={HandSanitizer} alt="hand-sanitizer" />
                                <span className="desc"> Hand Sanitizer </span>
                            </div>
                            <div className="health-protocol--item">
                                <img src={Disinfectant} alt="disinfectant" />
                                <span className="desc"> Disinfectant </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={onModalClosed}>Continue</Button>
            </Modal.Footer>
        </Modal>
    )
}
