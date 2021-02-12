import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Cira App">
        <div id="content-container">
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title">Selamat Pagi, Rio Sst!</span>
                            <h1 className="total">TEST</h1>
                        </div>
                        <div className="right">
                            <a href="#" className="button" data-toggle="modal" data-target="#depositActionSheet">
                                <ion-icon name="add-outline"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className="wallet-footer">
                        <div className="item">
                            <a href="#" data-toggle="modal" data-target="#depositActionSheet">
                                <div className="icon-wrapper bg-danger">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>
                                <strong>Admin Toko</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" data-toggle="modal" data-target="#sendActionSheet">
                                <div className="icon-wrapper">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>
                                <strong>Send</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="app-cards.html">
                                <div className="icon-wrapper bg-success">
                                    <ion-icon name="card-outline"></ion-icon>
                                </div>
                                <strong>Partner Card</strong>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" data-toggle="modal" data-target="#sendActionSheet">
                                <div className="icon-wrapper bg-warning">
                                    <ion-icon name="swap-vertical"></ion-icon>
                                </div>
                                <strong>Exchange</strong>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer mb-12 pb-3">
                <div className="footer-title">
                    Copyright © Cira App 2021. All Rights Reserved.
                </div>
                Inovasi untuk kemudahan online
            </div>
        </div>
    </Layout>
  )
}
