import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Menu() {
  return (
    <Layout title="Cira App">
      <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
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
        <div className="section mt-4">
            <div className="section-heading">
                <h2 className="title">Ruang Diskusi</h2>
                <a href="app-transactions.html" className="link">View All</a>
            </div>
            <div className="transactions">
                <a href="app-transaction-detail.html" className="item">
                    <div className="detail">
                        <img src="/img/sample/brand/1.jpg" alt="img" className="image-block imaged w48"/>
                        <div>
                            <strong>Amazon</strong>
                            <p>Shopping</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price text-danger"> - $ 150</div>
                    </div>
                </a>
                <a href="app-transaction-detail.html" className="item">
                    <div className="detail">
                        <img src="/img/sample/brand/2.jpg" alt="img" className="image-block imaged w48"/>
                        <div>
                            <strong>Apple</strong>
                            <p>Appstore Purchase</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price text-danger">- $ 29</div>
                    </div>
                </a>
                <a href="app-transaction-detail.html" className="item">
                    <div className="detail">
                        <img src="/img/sample/avatar/avatar3.jpg" alt="img" className="image-block imaged w48"/>
                        <div>
                            <strong>Alex Ljung</strong>
                            <p>Transfer</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price">+ $ 1,000</div>
                    </div>
                </a>
                <a href="app-transaction-detail.html" className="item">
                    <div className="detail">
                        <img src="/img/sample/avatar/avatar4.jpg" alt="img" className="image-block imaged w48"/>
                        <div>
                            <strong>Beatriz Brito</strong>
                            <p>Transfer</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price text-danger">- $ 186</div>
                    </div>
                </a>
            </div>
          </div>
        </div>
        <div className="appFooter mb-12 pb-3">
          <div className="footer-title">
            Copyright © Cira App 2021. All Rights Reserved.
          </div>
          Inovasi untuk kemudahan online
        </div>
    </Layout>
  )
}