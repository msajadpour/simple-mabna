import * as React from 'react';
import Card from '../../components/base/card/card';
import Navigator from '../../components/navigator/navigator';
// styles 
import Styles from "./sybmolDetail.module.scss"
const SymbolDetail: React.FC = () => {
    return (
        <div className={Styles.main}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navigator symbol="نماد کنونی"/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12">
                        <div className={Styles.symbolTitle}>
                            <Card className="m-4 p-4">
                                <li className={`d-flex align-items-center`}>
                                    <div className={`pe-4 ${Styles.symbol}`}><a>نماد</a></div>
                                    <div className={`${Styles.symbol}`}><span>13,5000</span></div>
                                </li>
                                <li className={`row`}>
                                    <div className={`col ${Styles.subSymbol}`}><p>نماد پایینی</p></div>
                                </li>
                            </Card>
                        </div>
                    </div>
                    <div className={`col-12 ${Styles.symbolInformation}`}>
                        <div className="row mx-2">
                            <div className="col-12 col-md-6">
                                <div className={Styles.sumbolTrade}>
                                    <Card className="mx-2 px-4 py-2">
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div className="border-0 fw-bolder"><p>اطلاعات معامله</p></div>
                                        </li>
                                    </Card>
                                    <Card className="m-2 p-4">
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>پایانی:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>بیشترین:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>کمترین:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>اولین:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>آخرین:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div><p>حجم:</p></div>
                                            <div><p>13,5000</p></div>
                                        </li>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-5 mt-md-0">
                                <div className={Styles.sumbolDemand}>
                                    <Card  className="mx-2 px-4 py-2">
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div className={`border-0 fw-bolder ${Styles.symbol}`}><p>عرضه تقاضا</p></div>
                                        </li>
                                    </Card>
                                    <Card className="m-2 p-4">
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div className={`col-2 fw-bold`}><p>دستور</p></div>
                                            <div className={`col-2 fw-bold`}><p>تعداد</p></div>
                                            <div className={`col-2 fw-bold`}><p>خرید</p></div>
                                            <div className={`col-2 fw-bold`}><p>فروش</p></div>
                                            <div className={`col-2 fw-bold`}><p>تعداد</p></div>
                                            <div className={`col-2 fw-bold`}><p>دستور</p></div>
                                        </li>
                                        <li className={`d-flex align-items-center justify-content-between`}>
                                            <div className={`col-2 ${Styles.buy}`}><p>نماد</p></div>
                                            <div className={`col-2 ${Styles.buy}`}><p>13,5000</p></div>
                                            <div className={`col-2 ${Styles.buy}`}><p>13,5000</p></div>
                                            <div className={`col-2 ${Styles.sell}`}><p>13,5000</p></div>
                                            <div className={`col-2 ${Styles.sell}`}><p>13,5000</p></div>
                                            <div className={`col-2 ${Styles.sell}`}><p>13,5000</p></div>
                                        </li>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SymbolDetail