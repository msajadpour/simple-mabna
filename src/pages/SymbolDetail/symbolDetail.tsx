import * as React from 'react';
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/base/card/card';
import Navigator from '../../components/navigator/navigator';
import { getApiResult, getApiResultById } from '../../features/api/services';
import { dataActions } from '../../features/data/dataSlice';
// styles 
import Styles from "./sybmolDetail.module.scss"
const SymbolDetail: React.FC = () => {
    const[currentTrades , setCurrentTrades] = useState([])
    const[currentBidasks , setCurrentBidasks] = useState([])
    const[currentSymbolName , setCurrentSymbolName] = useState<any>({})

    const dispatch = useDispatch()
    let bidasks = useSelector((store: any) => store.dataStore.bidasks);
    let trades = useSelector((store: any) => store.dataStore.trade);
    let symbolsName = useSelector((store: any) => store.dataStore.symbolNames);
    const params: any = useParams();
    useEffect(() => {
        if (!(bidasks.length > 0)){
            handleGetBidasks()
        }
        handleCurrentSymbolData()
    }, [params.id])
    const handleGetBidasks = async () => {
        let bidasks = await getApiResult("bidasks")
        dispatch(dataActions.setBidasks(bidasks)); 
    }
    const handleCurrentSymbolData = () => {
        const id = params.id
        console.log(symbolsName);
        console.log(bidasks);
        console.log(trades);
        
        setCurrentTrades(trades.filter((symbol:any) => symbol.id === id))
        setCurrentBidasks(bidasks.filter((symbol:any) => symbol.id === id))
        setCurrentSymbolName(symbolsName.filter((symbol:any) => symbol.id === id)[0])
    }
    return (
        <div className={Styles.main} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navigator symbol={`${currentSymbolName.trade_symbol}`} />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12">
                        <div className={Styles.symbolTitle}>
                            <Card className="m-4 p-4">
                                <li className={`d-flex align-items-center`}>
                                    <div className={`pe-4 ${Styles.symbol}`}><a>{`${currentSymbolName.trade_symbol}`}</a></div>
                                    <div className={`${Styles.symbol}`}><span>{`${currentSymbolName.value}`}</span></div>
                                </li>
                                <li className={`row`}>
                                    <div className={`col ${Styles.subSymbol}`}><p>{`${currentSymbolName.title}`}</p></div>
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
                                    <Card className="mx-2 px-4 py-2">
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