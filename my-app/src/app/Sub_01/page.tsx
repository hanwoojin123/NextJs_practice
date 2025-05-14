export default function SubPage() {
    return (
        <div className="section">
            {/* tit_area : S */}
            <div className="tit_area">
                <div className="left">
                    <h2 className="tit">납품검사현황</h2>
                </div>
                <div className="right">
                    <ul className="location">
                        <li className="home"><a href="#">home</a></li>
                        <li><a href="#">업무현황</a></li>
                        <li><strong>납품검사현황</strong></li>
                    </ul>
                </div>
            </div>
            {/* tit_area : E */}

            {/* search_area : S */}
            <div className="search_area">
                <ul className="search_list_area">
                    <li>
                        <dl>
                            <dt><strong className="label">연도</strong></dt>
                            <dd>
                                <div className="flex_wrap date">
                                    <select className="form_control">
                                        <option>2024</option>
                                    </select>
                                    <span>~</span>
                                    <select className="form_control">
                                        <option>2024</option>
                                    </select>
                                </div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><strong className="label">납기</strong></dt>
                            <dd>
                                <select className="form_control wp100">
                                    <option>월별</option>
                                    <option>분기별</option>
                                </select>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><strong className="label">차수별</strong></dt>
                            <dd>
                                <select className="form_control wp100">
                                    <option>전체</option>
                                    <option>1차</option>
                                    <option>2차</option>
                                    <option>3차</option>
                                    <option>4차</option>
                                    <option>5차</option>
                                    <option>이월</option>
                                </select>
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
                    <li>
                        <dl>
                            <dt><strong className="label">구분</strong></dt>
                            <dd>
                                <select className="form_control wp100">
                                    <option>전체</option>
                                    <option>동기</option>
                                    <option>비동기</option>
                                    <option>전송망</option>
                                    <option>WiBro</option>
                                </select>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>
                                <select className="dt_select wp100">
                                    <option>수량기준</option>
                                    <option>이상</option>
                                    <option>이하</option>
                                </select>
                            </dt>
                            <dd>
                                <input type="text" className="wp100 form_control" />
                            </dd>
                        </dl>
                    </li>
                    <li className="search_list_area_radio">
                        <dl>
                            <dt><strong className="label">양식</strong></dt>
                            <dd>
                                <div className="flex_wrap radio_wrap w250">
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_01" />
                                        <label htmlFor="radio_01">양식 1</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_02" />
                                        <label htmlFor="radio_02">양식 2</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_03" />
                                        <label htmlFor="radio_03">양식 3</label>
                                    </span>
                                </div>
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

            {/* tbl_style01 delivery : S */}
            <table className="tbl_style02 common">
                <colgroup>
                    <col style={{width: '140px'}} />
                    <col style={{width: '70px'}} />
                    <col style={{width: '70px'}} />
                    <col />
                    <col style={{width: '120px'}} />
                    <col style={{width: '120px'}} />
                    <col style={{width: '140px'}} />
                    <col style={{width: '140px'}} />
                    <col style={{width: '140px'}} />
                </colgroup>
                <thead className="col2">
                    <tr>
                        <th rowSpan={2}>연도</th>
                        <th rowSpan={2} colSpan={2}>구분</th>
                        <th rowSpan={2}>장비군</th>
                        <th rowSpan={2}>계획일자</th>
                        <th rowSpan={2}>계획수량</th>
                        <th colSpan={2}>구매실적현황</th>
                        <th>납품검사현황</th>
                    </tr>
                    <tr>
                        <th className="color01">수량</th>
                        <th className="color01">실적율(%)</th>
                        <th className="color01">수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={9} className="color01">2023</th>
                        <th rowSpan={9} className="color02">비동기</th>
                        <th rowSpan={9} className="color02">동기</th>
                        <td className="t_center">기지국</td>
                        <td className="t_center">01 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">02 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">03 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">04 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">05 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">06 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">07 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">08 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_center">기지국</td>
                        <td className="t_center">09 월</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            {/* tbl_style01 delivery : E */}
        </div>
    );
}