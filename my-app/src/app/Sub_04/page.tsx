export default function SubPage2() {
    return (
        <div className="section">
            {/* tit_area: S */}
            <div className="tit_area">
                <div className="left">
                    <h2 className="tit">지표분석</h2>
                </div>
                <div className="right">
                    <ul className="location">
                        <li className="home"><a href="#">home</a></li>
                        <li><a href="#">사후품질 분석</a></li>
                        <li><strong>지표분석</strong></li>
                    </ul>
                </div>
            </div>
            {/* tit_area: E */}

            {/* search_area: S */}
            <div className="search_area">
                <ul className="search_list_area">
                    <li>
                        <dl>
                            <dt><strong className="label">년도</strong></dt>
                            <dd>
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
                            <dt><strong className="label">시설 구분</strong></dt>
                            <dd>
                                <div className="flex_wrap radio_wrap w245">
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_01" />
                                        <label htmlFor="radio_01">전체</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_02" />
                                        <label htmlFor="radio_02">교환</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn" id="radio_03" />
                                        <label htmlFor="radio_03">기지국</label>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><strong className="label">협력사</strong></dt>
                            <dd>
                                <select className="form_control wp100">
                                    <option>전체</option>
                                </select>
                            </dd>
                        </dl>
                    </li>
                    <li className="col3">
                        <dl>
                            <dt><strong className="label">N/W 구분</strong></dt>
                            <dd>
                                <div className="flex_wrap radio_wrap">
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_01" />
                                        <label htmlFor="radio_01_01">전체</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_02" />
                                        <label htmlFor="radio_01_02">CDMA</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_03" />
                                        <label htmlFor="radio_01_03">WCDMA</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_04" />
                                        <label htmlFor="radio_01_04">WiBro</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_05" />
                                        <label htmlFor="radio_01_05">LTE</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_06" />
                                        <label htmlFor="radio_01_06">WCDMA+WiBro</label>
                                    </span>
                                    <span className="radio_custom">
                                        <input type="radio" name="radio_btn2" id="radio_01_07" />
                                        <label htmlFor="radio_01_07">WCDMA+WiBro+LTE</label>
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
            {/* search_area: E */}

            {/* sub_tit_area: S */}
            <div className="sub_tit_area">
                <div className="left">
                </div>
                <div className="right">
                    <div className="sub_tit_btn_group">
                        <button type="button" className="lbtn green">엑셀<i className="ico12 download"></i></button>
                    </div>
                </div>
            </div>
            {/* sub_tit_area: E */}

            {/* tbl_style01 indicators: S */}
            <table className="tbl_style02 common">
                <colgroup>
                    <col style={{width: '9%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '9%'}} />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>N/W구분</th>
                        <th>시설</th>
                        <th>모델</th>
                        <th>제조사</th>
                        <th>구분</th>
                        <th>1월</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={4} className="color01">CDMA</th>
                        <th rowSpan={4} className="color02">기지국</th>
                        <th rowSpan={4} className="color02">일반 BTS</th>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">12개월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">AS수량</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">A/S률(PPM)</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            {/* tbl_style01 indicators: E */}

            {/* tbl_style01 indicators: S */}
            <table className="tbl_style02 common">
                <colgroup>
                    <col style={{width: '9%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '9%'}} />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>N/W구분</th>
                        <th>시설</th>
                        <th>모델</th>
                        <th>제조사</th>
                        <th>구분</th>
                        <th>1월</th>
                        <th>2월</th>
                        <th>3월</th>
                        <th>4월</th>
                        <th>5월</th>
                        <th>6월</th>
                        <th>7월</th>
                        <th>8월</th>
                        <th>9월</th>
                        <th>10월</th>
                        <th>11월</th>
                        <th>12월</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan={8} className="color01">CDMA</th>
                        <th rowSpan={12} className="color02">기지국</th>
                        <th rowSpan={4} className="color02">일반 BTS</th>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">12개월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">AS수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">A/S율(PPM)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th rowSpan={4} className="color02">일반 BTS (1X)</th>
                        <td className="t_left">에릭슨</td>
                        <td className="t_left">12개월납품수량</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>14</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>112</td>
                    </tr>
                    <tr>
                        <td className="t_left">에릭슨</td>
                        <td className="t_left">월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">에릭슨</td>
                        <td className="t_left">AS 수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">에릭슨</td>
                        <td className="t_left">A/S율(PPM)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th rowSpan={4} className="color01">WIBRO</th>
                        <th rowSpan={4} className="color02">ODcell</th>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">12개월납품수량</td>
                        <td>93</td>
                        <td>93</td>
                        <td>93</td>
                        <td>93</td>
                        <td>93</td>
                        <td>34</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>25</td>
                        <td>25</td>
                        <td>549</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">월납품수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">AS수량</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="t_left">SKTS</td>
                        <td className="t_left">A/S율(PPM)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th colSpan={4} rowSpan={4} className="color02">총계</th>
                        <td className="t_left">12개월납품수량</td>
                        <td>101781</td>
                        <td>94068</td>
                        <td>69527</td>
                        <td>65578</td>
                        <td>52087</td>
                        <td>60151</td>
                        <td>70155</td>
                        <td>75897</td>
                        <td>83641</td>
                        <td>91632</td>
                        <td>113652</td>
                        <td>160432</td>
                        <td>1038601</td>
                    </tr>
                    <tr>
                        <td className="t_left">월납품수량</td>
                        <td>0</td>
                        <td>1229</td>
                        <td>5320</td>
                        <td>1443</td>
                        <td>3279</td>
                        <td>18716</td>
                        <td>12306</td>
                        <td>15437</td>
                        <td>20632</td>
                        <td>8784</td>
                        <td>22256</td>
                        <td>51030</td>
                        <td>160432</td>
                    </tr>
                    <tr>
                        <td className="t_left">AS수량</td>
                        <td>29</td>
                        <td>10</td>
                        <td>16</td>
                        <td>8</td>
                        <td>2</td>
                        <td>4</td>
                        <td>1</td>
                        <td>0</td>
                        <td>2</td>
                        <td>10</td>
                        <td>2</td>
                        <td>2</td>
                        <td>86</td>
                    </tr>
                    <tr>
                        <td className="t_left">A/S율(PPM)</td>
                        <td>285</td>
                        <td>106</td>
                        <td>230</td>
                        <td>122</td>
                        <td>38</td>
                        <td>66</td>
                        <td>14</td>
                        <td>0</td>
                        <td>24</td>
                        <td>109</td>
                        <td>18</td>
                        <td>12</td>
                        <td>83</td>
                    </tr>
                </tbody>
            </table>
            {/* tbl_style01 indicators: E */}
            
        </div>
    );
}