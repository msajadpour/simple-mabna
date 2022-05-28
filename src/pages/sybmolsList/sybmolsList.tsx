import React, { useCallback, useState } from "react";
import { useEffect } from "react";
// packages
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui/uiSlice";
import { dataActions } from "../../features/data/dataSlice";
// styles
import Styles from "./sybmolsList.module.scss";

import { getApiResult } from "../../features/api/services";
import { handlePriceSeprator } from "../../features/heplers/handlePriceSeprator";
import Loader from "../../components/loader/loader";
import Card from "../../components/base/card/card";

// main component
const SymbolsList = () => {
    // redux
    const dispatch = useDispatch();
    let sybmolsList = useSelector((store: any) => store.dataStore.symbolNames);
    let trades = useSelector((store: any) => store.dataStore.trade);
    let loading = useSelector((store: any) => store.ui.loading);

    useEffect(() => {
        if(!(sybmolsList.length > 0 || trades.length > 0)) { // if data exist api will not be called
            handleGetSymbolsList();
        }
    }, []);


    // handlers
    const handleModelsFields = (symbolsList:[] , tradesList:[]) => {
        let filteredSymbolsList = symbolsList.map((symbol:any) => ({id:symbol.id , title:symbol.value.title , trade_symbol:symbol.value.trade_symbol }))
        let filteredTradesList = tradesList.map((symbol:any) => ({close_price:handlePriceSeprator(symbol.value.close_price) , value:handlePriceSeprator(symbol.value.value) }))
        for(let i = 0 ; i < symbolsList.length ; i++){
            filteredSymbolsList[i] = {...filteredSymbolsList[i] , ...filteredTradesList[i]}
        }
        return filteredSymbolsList
    }
    const handleGetSymbolsList = async () => {
        dispatch(uiActions.setLoading(true));

        let symbolsList = await getApiResult("assets")
        let tradesList = await getApiResult("trades")
        let filteredSymbolList = handleModelsFields(symbolsList , tradesList) // optimize data model to render jsx

        dispatch(dataActions.setData(filteredSymbolList)) // to render main list
        dispatch(dataActions.setTrade(tradesList)) // save trades data in appStore to use in another page(.../Detail/id)
        dispatch(uiActions.setLoading(false)); // 
    };


// ====================handling virtual rendering models===================================\\ 
    const data = sybmolsList ? sybmolsList.map((symbol: any) => (({
        trade_symbol: symbol.trade_symbol,
        title: symbol.title,
        close_price:symbol.close_price,
        value: symbol.value,
        id: symbol.id,
    }))) : []

    // row to render in react-window component for virtual render
    const Row = ({ index, key, style }: any) => (
        <li className="row flex-start" key={data[index.id]} style={style}>
            <div className={`col-2 ${Styles.ellipsis}`}><p><Link to={`Detail/${data[index].id}`}> {data[index].trade_symbol}</Link></p> </div>
            <div className={`col-6 col-md-4 ${Styles.ellipsis}`}><p>{data[index].title}</p> </div>
            <div className={`col-2 ${Styles.ellipsis}`}><p>{data[index].close_price}</p> </div>
            <div className={`col-2 ${Styles.ellipsis}`}><p>{data[index].value}</p> </div>
        </li>
    )
// ====================handling virtual rendering models===================================\\ 
    return (
        <React.Fragment>
            <div className={Styles.main} onClick={()=> dispatch(uiActions.setShowSearchBox(false))}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={Styles.tableHeader}>
                                <Card className="m-4 p-4">
                                    <li className={`row flex-start px-4`}>
                                        <div className={`col-2 ${Styles.ellipsis}`}><p>نماد</p></div>
                                        <div className={`col-6 col-md-4 ${Styles.ellipsis}`}><p>نام شرکت</p></div>
                                        <div className={`col-2 ${Styles.ellipsis}`}><p>آخرین قیمت</p></div>
                                        <div className={`col-2 ${Styles.ellipsis}`}><p>ارزش معاملات</p></div>
                                    </li>
                                </Card>
                            </div>
                            <Card className="m-4 p-4">
                                <div className={Styles.taskWraper}>
                                    {loading && <Loader />}
                                    <List
                                        width={"100%"}
                                        height={520}
                                        itemCount={data.length}
                                        itemSize={40}
                                        style={{ direction: "rtl", overflowX: "hidden" }}
                                    >
                                        {Row}
                                    </List>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SymbolsList;
