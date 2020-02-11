/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";
import objectPath from "object-path";
import {connect} from "react-redux";
import {toAbsoluteUrl} from "../../utils/utils";
import * as builder from "../../ducks/builder";

class Footer extends React.Component {
    render() {
        const today = new Date().getFullYear();
        const {footerSelfLayoutIsExtended, footerClasses, footerContainerClasses} = this.props;
        return (
            <div
                className={`kt-footer ${footerClasses} kt-grid__item`}
                id="kt_footer"
            >
                {footerSelfLayoutIsExtended && (
                    <div className="kt-footer__top">
                        <div className={`kt-container ${footerContainerClasses}`}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="kt-footer__section">
                                        <h3 className="kt-footer__title">Hakkımızda</h3>
                                        <div className="kt-footer__content">
                                            Cointral, önemi her geçen gün artan Bitcoin ve diğer altcoinlerin; hızlı,
                                            güvenilir ve kolay bir şekilde hem fiziki, hem de online platformlarda alım
                                            ve satımını sağlayan bir teknoloji markasıdır.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="kt-footer__section">
                                        <h3 className="kt-footer__title">Menüler</h3>
                                        <div className="kt-footer__content">
                                            <div className="kt-footer__nav">
                                                <div className="kt-footer__nav-section">
                                                    <a target="_blank" href="https://cointral.com/tr/basin-bultenleri/">Basın
                                                        Bültenleri</a>
                                                    <a target="_blank" href="https://cointral.com/tr/marka/">Marka</a>
                                                    <a target="_blank"
                                                       href="https://cointral.com/tr/kariyer">Kariyer</a>
                                                    <a target="_blank"
                                                       href="https://cointral.com/tr/subelerimiz">Şubeler</a>

                                                </div>
                                                <div className="kt-footer__nav-section">
                                                    <a target="_blank" href="https://cointral.com/tr/category/blog">Cointral
                                                        Blog</a>
                                                    <a target="_blank" href="https://cointral.com/tr/category/haberler">Cointral
                                                        Haberler</a>
                                                    <a target="_blank" href="https://cointral.com/tr/sss">S.S.S</a>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="kt-footer__section">
                                        <h3 className="kt-footer__title">E-posta bülteni</h3>
                                        <div className="kt-footer__content">
                                            <form action="" className="kt-footer__subscribe">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="E-posta adresiniz"/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-brand" type="button">Katıl</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="kt-footer__bottom">
                    <div className={`kt-container ${footerContainerClasses}`}>
                        <div className="kt-footer__wrapper">
                            <div className="kt-footer__logo">
                                <Link to={"/"}>
                                    <img alt="Logo" src={toAbsoluteUrl("/media/logos/logo-2-sm.png")}/>
                                </Link>
                                <div className="kt-footer__copyright">
                                    {today}&nbsp;&copy;&nbsp;
                                    <a href="https://ibcl.com.tr/" target="_blank">IBCL</a> <a
                                    href="https://cointral.com/" target="_blank">Cointral</a> - Tüm Hakları Saklıdır
                                </div>
                            </div>
                            <div className="kt-footer__menu">
                                <a href="https://cointral.com/tr/kullanim-kosulu" target="_blank">Kullanım koşulları</a>
                                <a href="https://cointral.com/tr/cerez-politikasi" target="_blank">Çerez politikası</a>
                                <a href="https://cointral.com/tr/aml-kyc" target="_blank">AML/KYC</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    footerSelfLayoutIsExtended: objectPath.get(store.builder.layoutConfig, "footer.self.layout") === "extended",
    footerClasses: builder.selectors.getClasses(store, {path: "footer", toString: true}),
    footerContainerClasses: builder.selectors.getClasses(store, {path: "footer_container", toString: true}),
});

export default connect(mapStateToProps)(Footer);
