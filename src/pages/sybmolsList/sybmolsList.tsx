import React, { useCallback, useState } from "react";
import { useEffect } from "react";
// packages
import axios from "axios";
import { FixedSizeList as List } from "react-window";
// redux
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui/uiSlice";
// styles
import Styles from "./sybmolsList.module.scss";
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";
import Card from "../../components/base/card/card";

// main component
const SymbolsList = () => {
    // const[data , setData] = useState<any>([])
    // base url
    const API_URL = process.env.REACT_APP_API_URL;

    // redux
    const dispatch = useDispatch();
    let sybmolsList = useSelector((store: any) => store.ui.counter);
    let loading = useSelector((store: any) => store.ui.loading);

    useEffect(() => {
        handleGetTasks();
        // setData(dates)
    }, []);


    // handlers
    const handleGetTasks = async () => {
        dispatch(uiActions.setLoading(true));
        try {
            const res = await axios.get(
                `${API_URL}assets`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            dispatch(uiActions.setLoading(false));
            // to generate id for any task in array
            dispatch(uiActions.setCounter(res.data.data))
        } catch (err) {
            console.log(err);
        }
    };
    const data = sybmolsList ? sybmolsList.map((symbol: any) => (({
        trade_symbol: symbol.value.trade_symbol,
        title: symbol.value.title,
        id: symbol.id,
    }))) : []
    const Row = useCallback(({ index, key, style }: any) => (
        <li className="row flex-start" key={data[index.id]} style={style}>
            <div className={`col-2 ${Styles.ellipsis}`}><p><Link to={`Detail/${data[index].id}`}> {data[index].trade_symbol}</Link></p> </div>
            <div className={`col-6 col-md-4 ${Styles.ellipsis}`}><p>{data[index].title}</p> </div>
            <div className={`col-2 ${Styles.ellipsis}`}><p>{"133,500"}</p> </div>
            <div className={`col-2 ${Styles.ellipsis}`}><p>125,000</p> </div>
        </li>
    ), [sybmolsList])
    return (
        <React.Fragment>
            <div className={Styles.main}>
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
