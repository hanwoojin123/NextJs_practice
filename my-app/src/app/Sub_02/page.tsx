export default function SubPage2() {
    return (
        <div className="section">
            {/* tit_area : S */}
            <div className="tit_area">
                <div className="left">
                    <h2 className="tit">일반현황</h2>
                </div>
                <div className="right">
                    <ul className="location">
                        <li className="home"><a href="#">home</a></li>
                        <li><a href="#">업무현황</a></li>
                        <li><strong>일반현황</strong></li>
                    </ul>
                </div>
            </div>
            {/* tit_area : E */}

            {/* search_area : S */}
            <div className="search_area general">
                <ul className="search_list_area">
                    <li className="w455">
                        <dl>
                            <dt><strong className="label">년도</strong></dt>
                            <dd>
                                <select className="form_control">
                                    <option>2024</option>
                                </select>
                                <div className="flex_wrap date">
                                    <div className="datepicker">
                                        <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                    </div>
                                    <span>~</span>
                                    <div className="datepicker">
                                        <input type="text" className="datepicker form_control" placeholder="0000.00.00" />
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><strong className="label">플렌트</strong></dt>
                            <dd>
                                <select className="form_control wp100">
                                    <option>전체</option>
                                    <option>대구지사</option>
                                    <option>MNO Biz</option>
                                    <option>C&I Biz</option>
                                    <option>Network CIC</option>
                                    <option>CMS</option>
                                    <option>수도권Network본부</option>
                                    <option>부산Network본부</option>
                                    <option>대구Network본부</option>
                                    <option>서부Network본부</option>
                                    <option>중부Network본부</option>
                                    <option>Network연구원</option>
                                </select>
                            </dd>
                        </dl>
                    </li>
                </ul>
                <div className="search_btn_area">
                    <button type="button" className="btn"><i className="ico12 search_W"></i>조회</button>
                </div>
            </div>
            {/* search_area : E */}

            {/* sub_tit_area : S */}
            <div className="sub_tit_area">
                <div className="left">
                </div>
                <div className="right">
                    <div className="sub_tit_btn_group">
                        <button type="button" className="lbtn green">엑셀<i className="ico12 download"></i></button>
                    </div>
                </div>
            </div>
            {/* sub_tit_area : E */}

            {/* tbl_style01 general : S */}
            <table className="tbl_style02 common">
                <colgroup>
                    <col style={{width: '14%'}} />
                    <col style={{width: '8%'}} />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead className="col2">
                    <tr>
                        <th rowSpan={2} colSpan={2}>구분</th>
                        <th colSpan={2}>신청</th>
                        <th colSpan={2}>완료</th>
                        <th rowSpan={2}>진행</th>
                        <th rowSpan={2}>완료율(%)</th>
                        <th colSpan={2}>불합격건수</th>
                    </tr>
                    <tr>
                        <th className="color02">금주</th>
                        <th className="color02">누계</th>
                        <th className="color02">금주</th>
                        <th className="color02">누계</th>
                        <th className="color02">금주</th>
                        <th className="color02">누계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={3} className="color01">납품검사</th>
                        <th className="color02">선납</th>
                        <td>86</td>
                        <td>200</td>
                        <td>3</td>
                        <td>198</td>
                        <td>2</td>
                        <td>99</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="color02">납품</th>
                        <td>32</td>
                        <td>1281</td>
                        <td>26</td>
                        <td>1262</td>
                        <td>19</td>
                        <td>98</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th className="color02">합계</th>
                        <td>38</td>
                        <td>1481</td>
                        <td>29</td>
                        <td>1460</td>
                        <td>21</td>
                        <td>98</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th colSpan={2} className="color02">품질인증</th>
                        <td>0</td>
                        <td>4</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            {/* tbl_style01 general : E */}
        </div>
    );
}